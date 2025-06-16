---
title: "2 - If Statements"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

# Making Decisions with `if`

Use `if`, `else if`, and `else` blocks to control actions. The robot can react differently based on battle data.

```java
if (getEnergy() < 30) {
    retreat();
} else if (getGunHeat() == 0) {
    fire(2);
} else {
    ahead(50);
}
```

`if` checks the first condition. If it's false, `else if` offers more choices, and `else` runs if nothing else was true.

---

## Navigation

⬅️ [Back: Boolean Basics](/robocode/Day-5/00_boolean_basics)
➡️ [Next: Truth Tables](/robocode/Day-5/02_truth_tables)
