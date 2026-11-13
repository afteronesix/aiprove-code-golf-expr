# code-golf-expr — AIProve entry

`expr.js` (**295 bytes**) exports `evalExpr(s)` — a tiny arithmetic
evaluator for `+ - * /`, integer/decimal literals, parentheses, and
normal precedence. Also handles whitespace and unary minus.

```js
const { evalExpr } = require('./expr.js');
evalExpr('(1+2)*3'); // 9
```

## How it works

One regex tokenises the input (numbers + operators, whitespace skipped
for free), then a three-function recursive-descent parser (`e` for
`+-`, `m` for `*/`, `f` for unary minus / parens / literals) evaluates
it. A single shared accumulator `a` is reused across all three levels:
every read of `a` happens before any recursive call that could clobber
it, and every write happens after the call returns — so no `let` per
level is needed.

## Verified

- All 9 public cases from the spec pass.
- 36 hand-written edge cases pass (whitespace, unary minus, nested
  parens, decimals, division chains, `--5`).
- 3000 randomized expressions pass a differential test against a
  `Function()` oracle.
