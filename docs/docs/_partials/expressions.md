Expressions follow the syntax of `[operator][value]` e.g. `<3` or `>=3` and can be combined with `&&` and `||` operators.

Example expressions that can be used:

| Expression                          | Explanation                                                                                                       |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `default`                           | will be shown when the value is empty                                                                             |
| `>0`                                |                                                                                                                   |
| `>= 50 && <100`                     |                                                                                                                   |
| `==red`                             |                                                                                                                   |
| `!=black and yellow`                | Everything that is not an operator is treated as a value. This is evaluated as `inputValue != "black and yellow"` |
| <code>==23 &#124;&#124; ==25</code> |                                                                                                                   |

Supported operators:

| Operator                                                        |
|-----------------------------------------------------------------|
| `default` <br/>evaluates to true when value is empty, e.g. `""` |
| `==`                                                            |
| <code>&amp;&amp;</code>                                         |
| <code>&#124;&#124;</code>                                       |
| <code>&gt;</code>                                               |
| <code>&gt;=</code>                                              |
| <code>&lt;</code>                                               |
| <code>&lt;=</code>                                              |

___Note___: Only _simple_ expressions are supported.
Logical groupings e.g. `(a || b) && c` are not supported. <br/>
Variable bindings e.g. `<=a` are not supported. <br/>
You can only use only one type of logical concatenation at a time. i.e. `>3 && ==5 && <10`, or `>3 || ==5 || <10`. Expressions that mix the two, i.e. `>3 || ==2 && <10` are not supported.



___Security Note___: This controller is designed to be *safe*. It does not violate any strong CSP policies, and it does ___NOT___ use `eval()`.
The expressions are parsed as strings and predicate functions are created based on the presence or absence of recognised operators in the string, and the values that the SignalInputController broadcasts from the user are tested against the expression using
built-in JavaScript operators for each math operation.