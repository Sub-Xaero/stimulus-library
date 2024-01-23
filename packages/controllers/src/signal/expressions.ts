export function extractExpressions(expressionString: string): Array<string> {
  const andExpression = expressionString.includes("&&");
  return expressionString.split(andExpression ? "&&" : "||");
}

export function extractPredicates(expressionString: string): Array<(val: string | number) => boolean> {
  expressionString = expressionString.trim();

  const andExpression = expressionString.includes("&&");
  const orExpression = expressionString.includes("||");
  const groupings = expressionString.includes("(") || expressionString.includes(")");

  if (andExpression && orExpression) {
    throw new Error("Cannot have both && and || in the same expression.");
  }

  if (groupings) {
    throw new Error("Cannot have logical groupings `(>3 && <= 9) || (>1 && <2)` in the expression. Only supports simple expressions like  `>1 && <3`");
  }

  const expressions = extractExpressions(expressionString);

  if (andExpression) {
    return expressions.map(ex => _predicateForExpression(ex));
  } else if (orExpression) {
    return expressions.map(ex => _predicateForExpression(ex));
  } else {
    return [_predicateForExpression(expressionString)];
  }
}


function _predicateForExpression(expression: string): (val: string | number) => boolean {
  const operators = [">=", "<=", "==", "!=", ">", "<"];
  const operator = operators.find(part => expression.includes(part));
  if (!operator) {
    throw new Error(`Could not find operator in expression: ${expression}`);
  }
  let expressionValue: string | number = expression.split(operator)[1].trim();
  const isNumber = /^-?\d*(\.\d+)?$/.test(expressionValue);
  if (isNumber) {
    expressionValue = parseFloat(expressionValue);
  }

  if (expressionValue === "") {
    throw new Error(`Could not find a value in expression: ${expression}`);
  }

  const notEmpty = (signalValue: string | number) => signalValue !== "";

  switch (operator) {
    case ">":
      return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue > expressionValue;
    case "<":
      return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue < expressionValue;
    case ">=":
      return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue >= expressionValue;
    case "<=":
      return (signalValue: string | number) => isNumber && notEmpty(signalValue) && signalValue <= expressionValue;
    case "==":
      return (signalValue: string | number) => notEmpty(signalValue) && signalValue == expressionValue;
    case "!=":
      return (signalValue: string | number) => notEmpty(signalValue) && signalValue != expressionValue;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
}
