---
title: "4 - Using VS Code"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Ready to explore **4 - Using VS Code** 😎

# VS Code Workspace Setup

This lesson shows how to configure a `.vscode` folder so you can compile and run your robot directly from Visual Studio Code.

## How VS Code Works

VS Code is a powerful code editor that supports Java development using extensions and build tasks. When configured correctly, it can:

* Detect your Java libraries
* Run compilation scripts
* Launch terminal commands (like running your bot)
* Let you debug or test code using keyboard shortcuts

Using the `.vscode` folder, we tell VS Code *how* to do each of those things.

## Create the `.vscode` Folder

Inside your project root (`RobocodeLab`), make a new directory named `.vscode`.

```
C:.
├───.vscode
├───YourBotFolder
│   ├───infinite
│   │   └───mind
│   └───lib
```

> Replace `YourBotFolder` with the folder where your bot’s files are stored. For example: `TankBot`, `RocketBot`, etc.

## Add the Configuration Files

Create the following files inside `.vscode`.

### `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run YourBot via batch files",
      "type": "cppvsdbg",
      "request": "launch",
      "program": "${workspaceFolder}/YourBotFolder/YourBot.cmd",
      "args": [],
      "cwd": "${workspaceFolder}/YourBotFolder",
      "preLaunchTask": "compile-bot",
      "console": "externalTerminal",
      "stopAtEntry": false
    }
  ]
}
```

### `settings.json`

```json
{
  "java.project.referencedLibraries": [
    "YourBotFolder/lib/*.jar"
  ]
}
```

### `tasks.json`

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "compile-bot",
      "type": "shell",
      "command": "${workspaceFolder}/YourBotFolder/compile.bat",
      "options": {
        "cwd": "${workspaceFolder}/YourBotFolder"
      },
      "problemMatcher": []
    }
  ]
}
```

## How It Works

* **tasks.json** tells VS Code to run `compile.bat` when you press F5. This compiles your bot’s Java code.
* **launch.json** runs `YourBot.cmd` to start the Robocode bot in an external terminal.
* **settings.json** ensures the Java libraries in `lib/` are recognized by the Java extension in VS Code.

## Running Your Bot

1. Open your workspace folder in VS Code.
2. Press **F5** or go to **Run → Start Debugging**.
3. VS Code runs `compile.bat`, then starts `YourBot.cmd`.
4. Your bot will appear in the Robocode arena or output log depending on how you launch it.

---

## Navigation

⬅️ [Back: First Lines of Code](/robocode/Day-2/02_first_lines)
➡️ [Next: Java Datatypes](/robocode/Day-3/00_variables_and_datatypes)


