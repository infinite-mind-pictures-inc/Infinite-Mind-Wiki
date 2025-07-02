---
title: "1 - Methods and Classes"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Diving into **1 - Methods and Classes** 🤖

# Why Use Methods?

Methods package related statements so you can call them whenever you need. This keeps `run()` clean and focused.

```java
public void run() {
    initialize();
    while (true) {
        scanAndFire();
        moveAroundMap();
    }
}

public void initialize(){
    ...
}
public void scanAndFire(){
    ...
}
public void moveAroundMap(){
    ...
}
```

The modular code will be easier to add new behaviour to and will increase your bots efficiency. 

---


## Navigation

⬅️ [Back: Reactionary Logic](/robocode/Day-5/04_reactionary_logic)
➡️ [Next: Helper Methods](/robocode/Day-6/01_helper_methods)
