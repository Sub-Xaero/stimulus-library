export function extractPredicates(expressionString: string): Array<(val: string | number) => boolean> {
  expressionString = expressionString.trim();

  let andExpression = expressionString.includes("&&");
  let orExpression = expressionString.includes("||");
  let groupings = expressionString.includes("(") || expressionString.includes(")");

  if (andExpression && orExpression) {
    throw new Error("Cannot have both && and || in the same expression.");
  }

  if (groupings) {
    throw new Error("Cannot have logical groupings `(>3 && <= 9) || (>1 && <2)` in the expression. Only supports simple expressions like  `>1 && <3`");
  }

  let expressions = expressionString.split(andExpression ? "&&" : "||");
  if (andExpression) {
    return expressions.map(ex => _predicateForExpression(ex));
  } else if (orExpression) {
    return expressions.map(ex => _predicateForExpression(ex));
  } else {
    return [_predicateForExpression(expressionString)];
  }
}


function _predicateForExpression(expression: string): (val: string | number) => boolean {
  let operators = [">=", "<=", "==", "!=", ">", "<"];
  let operator = operators.find(part => expression.includes(part));
  if (!operator) {
    throw new Error(`Could not find operator in expression: ${expression}`);
  }
  let expressionValue: string | number = expression.split(operator)[1].trim();
  let isNumber = /^-?[0-9]\d*(\.\d+)?$/.test(expressionValue);
  expressionValue = isNumber ? parseFloat(expressionValue) : expressionValue;

  if (expressionValue == "") {
    throw new Error(`Could not find a value in expression: ${expression}`);
  }

  let notEmpty = (signalValue: string | number) => signalValue !== "";

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
