# Arrow functions
- They do not have their own this context — they inherit this from their enclosing scope.
- You cannot use new with them (they’re not constructor functions).
- They automatically return a value if there’s no `{}` block.


| Situation                     | Syntax                 | Example                  |
| ----------------------------- | ---------------------- | ------------------------ |
| One parameter, one expression | No `()` or `{}` needed | `x => x * 2`             |
| Multiple parameters           | Use `()`               | `(x, y) => x + y`        |
| No parameters                 | Use `()`               | `() => 42`               |
| Multi-line logic or `return`  | Use `{}` and `return`  | `x => { return x * 2; }` |
| Return an object literal      | Wrap object in `()`    | `x => ({ val: x })`      |


## Cheatsheet
| Expression Type          | Use                                   |
| ------------------------ | ------------------------------------- |
| 1 param + 1-line return  | ✅ `x => x + 1`                        |
| No param or >1 param     | ✅ `(x, y) => x + y`                   |
| Multi-line function body | ✅ `x => { do stuff; return result; }` |
| Return object literal    | ✅ `x => ({ key: value })`             |
