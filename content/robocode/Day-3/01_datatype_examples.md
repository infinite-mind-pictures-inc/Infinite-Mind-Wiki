---

title: "2 - Data Type Examples"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - beginner
---
> Time to explore **2 - Data Type Examples** 😎

# 📊 Examples with Numbers and Strings

In this lesson, we’ll learn about different **data types** in Java — these are the kinds of values your robot can use, like numbers, letters, and words. Each type has its own special rules and powers. Let’s check them out!

---

## 🔢 Integers (`int`)

**Integers** are whole numbers. That means they **don't** have decimals. You can use them to count things, measure scores, or store positions.

```java
int score = 10;
int lives = 3;
```

Java automatically uses **integer math** when you're working with just `int` numbers.

| Operation      | Code                    | What It Does                         | Result |
| -------------- | ----------------------- | ------------------------------------ | ------ |
| Addition       | `int sum = 5 + 2;`      | 5 plus 2                             | `7`    |
| Subtraction    | `int diff = 5 - 2;`     | 5 minus 2                            | `3`    |
| Multiplication | `int product = 5 * 2;`  | 5 times 2                            | `10`   |
| Division       | `int quotient = 5 / 2;` | 5 divided by 2, decimal gets cut off | `2`    |
| Remainder      | `int rem = 5 % 2;`      | What’s left after dividing 5 by 2    | `1`    |

> 📝 **Note:** If you divide `5 / 2` using `int`, you don't get 2.5 — Java **chops off** the decimal and gives just `2`.

---

## 🧮 Decimal Numbers (`double`)

A `double` can store **decimal numbers** like `2.5` or `3.14`. It’s great for when you need **precise values**, like distances or percentages.

```java
double speed = 2.5;
double batteryLevel = 75.5;
```

| Operation      | Code                        | What It Does             | Result |
| -------------- | --------------------------- | ------------------------ | ------ |
| Multiplication | `double r = 4.5 * 1.2;`     | 4.5 times 1.2            | `5.4`  |
| Order of Ops   | `double r = 4.5 * 1.2 + 3;` | Multiply first, then add | `8.4`  |
| Division       | `double d = 5.0 / 2.0;`     | Divides with decimals    | `2.5`  |

> ✅ **Reminder:** To get a decimal answer, **at least one number must have a `.0`** in it! If both numbers are `int`, you'll get an `int` result.

---

## 🔤 Characters (`char`)

A `char` (short for character) stores a **single letter or symbol**. It’s surrounded by **single quotes** like `'A'` or `'%'`.

```java
char grade = 'A';
char symbol = '!';
```

| Operation     | Code                              | What It Does                 | Result |
| ------------- | --------------------------------- | ---------------------------- | ------ |
| Assign letter | `char letter = 'A';`              | Stores letter A              | `'A'`  |
| Next letter   | `char next = (char)(letter + 1);` | Adds 1 to A (ASCII code) = B | `'B'`  |
| Symbol        | `char symbol = '!';`              | Stores exclamation mark      | `'!'`  |

> 💡 **Fun Fact:** Letters are secretly stored as numbers (ASCII). `'A'` is `65`, `'B'` is `66`, and so on!

---

## 🧵 Strings

A `String` is a **bunch of characters** stuck together — like a **word** or **sentence**. You use **double quotes** for strings: `"Hello"`

```java
String name = "Robo";
String message = "Hello, world!";
```

| Operation            | Code                 | What It Does                      | Result                |
| -------------------- | -------------------- | --------------------------------- | --------------------- |
| Basic join           | `"Hello" + " World"` | Joins the two parts together      | "Hello World"         |
| Add variable         | `"Hello, " + name`   | Adds the value inside `name`      | "Hello, Robo"         |
| Add number to string | `"Score: " + 10`     | Turns 10 into text, then joins it | "Score: 10"           |
| Multi-line           | `"Line1\nLine2"`     | `\n` makes a new line             | Line1 (newline) Line2 |

> 💡 **Tip:** Strings aren’t just text — they’re **objects** that have cool powers like `.length()` (how long it is) and `.toUpperCase()` (shouty version!)

---

## 🧠 Summary Table

| Data Type | What It's For       | Examples                           | Notes                                     |
| --------- | ------------------- | ---------------------------------- | ----------------------------------------- |
| `int`     | Whole numbers       | `5 + 2`, `10 / 3`, `7 % 4`         | No decimals, does regular math            |
| `double`  | Decimal numbers     | `5.0 / 2.0`, `3.14 * 2`, `1.5 + 3` | Gives accurate decimal answers            |
| `char`    | Single characters   | `'A'`, `'Z'`, `'!'`, `'1'`         | Must use single quotes `' '`, ASCII aware |
| `String`  | Words and sentences | `"Hello" + name`, `"Score: " + 5`  | Double quotes, use `+` to build messages  |

## 🚀 Practice in Visual Studio Code

Time to try these datatypes yourself! Open **Visual Studio Code** and create a new file called `Example.java`.

```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello Robocode!");
    }
}
```

Save the file, then run the following in your VS Code terminal:

```bash
javac Example.java
java Example
```

You'll see the greeting printed to the console. Modify the message or add variables from the table above, recompile with `javac`, and run again to observe the changes.
---

> 🧪 **Challenge:** Try printing out these different types using `System.out.println()` and see what happens!

```java
System.out.println(5 + 2);           // int math
System.out.println(5.0 / 2.0);       // double math
System.out.println('A' + 1);         // adds to char, prints number!
System.out.println("Hi " + "there!"); // String join
```


<iframe src="https://axyl-casc.github.io/WikiMinigames/datatypesquiz.html"
  style="width: 100%; height: 100%; min-height:1000px; border: none; border-radius: 8px;"></iframe>
  
---

➡️ [🤖 Minigame!](/robocode/Day-3/02_minigame)


## Navigation

⬅️ [Back: Variables](/robocode/Day-3/00_variables_and_datatypes)
➡️ [Next: Input / Output](/robocode/Day-4/00_system_out_debugging)
