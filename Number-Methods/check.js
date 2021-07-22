// What will be the result and why?

"" + 1 + 0; // "10" - String: String + Number = Number
"" - 1 + 0; // -1 - Number: String.toNumber()
true + false; // 1 - Number: Boolean.toNumber()
6 / "3"; // 2 - Number: String.toNumber()
"2" * "3"; // 6 - Number: String.toNumber()
4 + 5 + "px"; // "9px" - String: Number.toString()
"$" + 4 + 5; // "$45" - String: Number.toString()
"4" - 2; // 2 - Number: String.toNumber()
"4px" - 2; // NaN: String.toNumber() [4px is not a Number]
7 / 0; // Infinity: Number / 0 === Infinity
" -9 " + 5; // " -9 5" - String: Number.toString()
" -9 " - 5; // -14 - Number: String.toNumber()
null + 1; // 1 - Number: null == 0 )))
undefined + 1; // NaN undefined != 0
