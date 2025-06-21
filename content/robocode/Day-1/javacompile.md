---
title: "Java Compiler"
tags: ["robocode","cs"]
---

## 🔨 What does `javac` do?

`javac` is the **Java compiler** ‑ it takes the human‑readable code you just typed (`HelloWorld.java`) and translates it into a computer‑readable *byte‑code* file (`HelloWorld.class`).

* It **checks your code for mistakes**: if something is misspelled or out of place, `javac` will stop and tell you what line needs attention.
* It **optimises** where it can so your program runs faster.
* The result is a compact, language‑neutral file that the Java Virtual Machine (JVM) can understand.

> Think of `javac` like a master chef turning your recipe (source code) into a ready‑to‑cook meal (byte‑code).

---

## 🚀 What does `java` do?

`java` is the **launcher** that starts the **Java Virtual Machine (JVM)** and *runs* the byte‑code created by `javac`.

* It **loads the `.class` file** into the JVM.
* The JVM **interprets or Just‑In‑Time (JIT) compiles** the byte‑code into machine instructions for *your* computer.
* It then **executes** those instructions step‑by‑step, doing whatever your program asks — in this case, printing `Hello, world!` to the terminal.

> Picture the JVM as a universal game console: any game (byte‑code) compiled by `javac` can play on any device that has the console (JVM) installed.

### Why two steps?

1. **Write once**: The compiler (`javac`) produces platform‑independent byte‑code.
2. **Run anywhere**: The JVM (`java`) makes that byte‑code work on Windows, macOS, Linux, or even a Raspberry Pi — no changes required!

---

### Quick recap

| Command                 | Role                              | Typical output     |
| ----------------------- | --------------------------------- | ------------------ |
| `javac HelloWorld.java` | Compiles source to byte‑code      | `HelloWorld.class` |
| `java HelloWorld`       | Launches JVM to execute byte‑code | `Hello, world!`    |

Now you know what happens *under the hood* every time you hit **compile & run**. 🚗💨
