---

title: "2 - Data Type Examples"
tags: ["robocode", "tutorial", "hands-on", "cs", "beginner"]
---

> Time to explore **2 - Data Type Examples** 😎

# Examples with Numbers and Strings

This lesson explores core Java data types: integers, doubles, characters, and strings. We'll demonstrate common operations and explain how they behave in Java. Boolean logic is saved for the next lesson on conditions.

---

## Integers (`int`)

Integers are whole numbers, positive or negative. Java automatically uses integer arithmetic when both operands are `int`.

| Operation      | Code                    | Explanation                           | Result |
| -------------- | ----------------------- | ------------------------------------- | ------ |
| Addition       | `int sum = 5 + 2;`      | Adds 5 and 2                          | `7`    |
| Subtraction    | `int diff = 5 - 2;`     | Subtracts 2 from 5                    | `3`    |
| Multiplication | `int product = 5 * 2;`  | Multiplies 5 by 2                     | `10`   |
| Division       | `int quotient = 5 / 2;` | Divides 5 by 2, drops decimal         | `2`    |
| Modulo         | `int rem = 5 % 2;`      | Gives the remainder of 5 divided by 2 | `1`    |

> 📝 Note: Integer division always truncates toward zero. No rounding.

---

## Decimal Numbers (`double`)

`double` values store floating-point numbers (with decimal places).

| Operation      | Code                        | Explanation                           | Result |
| -------------- | --------------------------- | ------------------------------------- | ------ |
| Multiplication | `double r = 4.5 * 1.2;`     | Standard multiplication with decimals | `5.4`  |
| Order of Ops   | `double r = 4.5 * 1.2 + 3;` | Uses PEMDAS: (4.5 × 1.2) + 3          | `8.4`  |
| Division       | `double d = 5.0 / 2.0;`     | Uses floating-point division          | `2.5`  |

> ✅ You must use at least one decimal (like `5.0`) to get decimal results.

---

## Characters (`char`)

A `char` stores a single character, like a letter or symbol.

| Operation     | Code                              | Explanation                          | Result |
| ------------- | --------------------------------- | ------------------------------------ | ------ |
| Assign letter | `char letter = 'A';`              | Stores capital A in a variable       | `'A'`  |
| Next letter   | `char next = (char)(letter + 1);` | Uses ASCII math: 'A' + 1 becomes 'B' | `'B'`  |
| Symbol        | `char symbol = '!';`              | Stores an exclamation mark           | `'!'`  |

> 📌 Characters are actually stored as numbers (ASCII/Unicode). You can do math with them.

---

## Strings

Strings are sequences of characters. Java uses `+` to join them (concatenation).

| Operation            | Code                 | Explanation                            | Result          |
| -------------------- | -------------------- | -------------------------------------- | --------------- |
| Basic join           | `"Hello" + " World"` | Combines two strings                   | `"Hello World"` |
| Add variable         | `"Hello, " + name`   | Adds variable `name` to string         | `"Hello, Robo"` |
| Add number to string | `"Score: " + 10`     | Converts number to text before joining | `"Score: 10"`   |
| Multi-line           | `"Line1\nLine2"`     | `\n` adds a newline                    | `Line1\nLine2`  |

> 💡 Strings are not primitive types. They're objects with methods like `.length()` and `.toUpperCase()`.

---

## Summary Table

| Data Type | Examples                           | Notes                                       |
| --------- | ---------------------------------- | ------------------------------------------- |
| `int`     | `5 + 2`, `10 / 3`, `7 % 4`         | Whole numbers, integer math                 |
| `double`  | `5.0 / 2.0`, `3.14 * 2`, `1.5 + 3` | Decimal math, automatic precision           |
| `char`    | `'A'`, `'Z'`, `'!'`, `'1'`         | Single letters/symbols, supports ASCII math |
| `String`  | `"Hello" + name`, `"Points: " + 5` | Text data, concatenation via `+`            |

---

## Navigation

⬅️ [Back: Variables](/robocode/Day-3/00_variables_and_datatypes)
➡️ [Next: Input / Output](/robocode/Day-4/00_system_out_debugging)
