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

## Copy the API JAR

1. Find the Robocode API JAR (e.g., `robocode-tankroyale-bot-api-0.32.1.jar`) in your downloaded Robocode folder. Look for `robocode-tankroyale-bot-api-<version>.jar` to use the latest version.
2. Copy it into the root of your robot project.

## Configure VS Code

1. Inside your project, create a folder named `.vscode`.
2. Inside `.vscode`, create a file called `settings.json`.
3. Paste the following JSON into `settings.json`:

```json
{
    "java.project.referencedLibraries": [
        "*.jar"
    ]
}
```

This tells VS Code to load any JAR in your project so IntelliSense can use the Robocode API.

---

## Navigation

➡️ [Next: System.out.println for Debugging](/robocode/Day-4/01_system_out_debugging)

