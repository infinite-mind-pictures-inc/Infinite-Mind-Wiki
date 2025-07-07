---
title: "3 - Methods and Classes"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Diving into **3 - Methods and Classes** 🤖

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

⬅️ [Back: Debugging with Patience](/robocode/Day-7/01_basic_debugging)
➡️ [Next: Helper Methods](/robocode/Day-7/03_helper_methods)
