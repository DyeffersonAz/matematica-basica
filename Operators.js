const Operators = (() => {
  const ADD = Symbol("+");
  const SUBTRACT = Symbol("-");
  const MULTIPLY = Symbol("*");
  const DIVIDE = Symbol("/");

  const BY_KEY = Object.freeze({
    add: ADD,
    subtract: SUBTRACT,
    multiply: MULTIPLY,
    divide: DIVIDE,
  });

  const BY_CHAR = Object.freeze({
    "+": ADD,
    "-": SUBTRACT,
    "*": MULTIPLY,
    "/": DIVIDE,
  });

  const TO_CHAR = new Map([
    [ADD, "+"],
    [SUBTRACT, "-"],
    [MULTIPLY, "*"],
    [DIVIDE, "/"],
  ]);

  return Object.freeze({
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE,
    fromKey: (k) => BY_KEY[k],
    fromChar: (c) => BY_CHAR[c],
    toChar: (sym) => TO_CHAR.get(sym),
  });
})();
