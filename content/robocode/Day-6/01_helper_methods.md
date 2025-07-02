---
title: "2 - Helper Methods"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Check out **2 - Helper Methods** 😎

# Breaking Up `run()`

Large blocks of code quickly become messy. Helper methods let you name a routine and reuse it.

```java
private void scanAndFire() {
    turnRadarRight(360);
    if (getGunHeat() == 0) {
        fire(1);
    }
}
```

Call `scanAndFire()` whenever your robot should look for opponents. This keeps the main loop short and readable.

---

## Navigation

⬅️ [Back: Methods and Classes](/robocode/Day-6/00_methods_and_classes)
➡️ [Next: Ownership & Naming](/robocode/Day-6/02_ownership_naming)
