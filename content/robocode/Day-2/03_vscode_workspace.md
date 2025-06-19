---
title: "4 - Using VS Code"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Ready to explore **4 - Using VS Code** 😎

# VS Code Workspace Setup

This lesson shows how to configure a `.vscode` folder so you can compile and run your robot directly from Visual Studio Code.

## Create the `.vscode` Folder

Inside your project root (`RobocodeLab`), make a new directory named `.vscode`.

```
C:.
├───.vscode
├───Bot
│   ├───infinite
│   │   └───mind
│   └───lib
```

## Add the Configuration Files

Create the following files inside `.vscode`.

### `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run TankBot via batch files",
      "type": "cppvsdbg",
      "request": "launch",
      "program": "${workspaceFolder}/Bot/TankBot.cmd",
      "args": [],
      "cwd": "${workspaceFolder}/Bot",
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
    "Bot/lib/*.jar"
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
      "command": "${workspaceFolder}/Bot/compile.bat",
      "options": {
        "cwd": "${workspaceFolder}/Bot"
      },
      "problemMatcher": []
    }
  ]
}
```

## How It Works

- **tasks.json** compiles your bot using `compile.bat`.
- **launch.json** runs `TankBot.cmd` in an external terminal so you can see output.
- **settings.json** ensures VS Code recognizes the libraries inside `Bot/lib`.

Press **F5** (or select **Run → Start Debugging**) to compile and launch the robot.

---

## Navigation

⬅️ [Back: First Lines of Code](/robocode/Day-2/02_first_lines)
➡️ [Next: Java Datatypes](/robocode/Day-3/00_variables_and_datatypes)

