---
title: "1 - VS Code Autocomplete Setup"
tags:
  - robocode
  - tutorial
  - setup
  - cs
  - intermediate
---

> Kick off Day 4 by configuring **Robocode API** autocomplete in VS Code.

## Configure VS Code

1. Inside your project, create a folder named `.vscode`.
2. Inside `.vscode`, create a file called `settings.json`.
3. Paste the following JSON into `settings.json`:

```json
{
    "java.project.referencedLibraries": [
        "../lib/*.jar"
    ]
}
```

This tells VS Code to load any JAR stored in a sibling `lib` folder so IntelliSense can use the Robocode API without moving files into your project.

If you keep the JAR in your project root instead, replace `../lib/*.jar` with `*.jar`.

---

## Navigation

➡️ [Next: System.out.println for Debugging](/robocode/Day-4/01_system_out_debugging)

