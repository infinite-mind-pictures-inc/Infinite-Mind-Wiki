# Quartz Tag Reference Table

Use this table to standardize tags across your Quartz-based lab content. You can copy any of these into the `tags:` section of a page’s frontmatter.

| **Category**         | **Tag**          | **Purpose / Meaning**                                       |
| -------------------- | ---------------- | ----------------------------------------------------------- |
| Programming Language | `java`           | Uses Java code                                              |
|                      | `csharp`         | Uses C# code                                                |
|                      | `python`         | Uses Python code                                            |
|                      | `javascript`     | Uses JavaScript                                             |
|                      | `typescript`     | Uses TypeScript                                             |
|                      | `cpp`            | Uses C++                                                    |
| Game / Platform      | `robocode`       | Involves Robocode                                           |
|                      | `minecraft`      | Based in Minecraft (e.g. with redstone or mods)             |
|                      | `scratch`        | Based on Scratch                                            |
|                      | `unity`          | Uses Unity game engine                                      |
|                      | `godot`          | Uses Godot engine                                           |
|                      | `unreal`         | Uses Unreal engine                                          |
|                      | `unplugged`      | No computer/game required                                   |
| Age Group            | `all-ages`       | Suitable for all age groups                                 |
|                      | `children`       | Designed specifically for children                          |
|                      | `teens`          | Designed for teens (e.g. 13–18)                             |
|                      | `adults`         | Designed for adult learners                                 |
| Difficulty Level     | `beginner`       | Suitable for first-time learners                            |
|                      | `intermediate`   | Assumes prior basic knowledge                               |
|                      | `advanced`       | Designed for experienced learners                           |
| Learning Type        | `hands-on`       | Involves building or experimentation                        |
|                      | `simulation`     | Involves watching or running simulations                    |
|                      | `reading`        | Mostly reading and analysis                                 |
|                      | `group-activity` | Meant to be done in teams or with collaboration             |
| Curriculum Fit       | `stem`           | Science, Technology, Engineering, or Math focused           |
|                      | `cs`             | Computer Science-specific                                   |
|                      | `ethics`         | Involves discussion of ethical issues (e.g., AI ethics)     |
|                      | `design`         | Covers UX, UI, or software/game design concepts             |
| Execution Style      | `asynchronous`   | Can be completed at any time, self-paced                    |
|                      | `synchronous`    | Designed to be done in real-time with a group or instructor |
| Status / Label       | `wip`            | This content is a Work in Progress                          |
| Page Type            | `intro`          | Introduction or overview of a topic or project              |
|                      | `contents`       | Table of contents or structured index for a section         |
|                      | `tutorial`       | Step-by-step instructional content                          |
| Category             | `sustainability` | Focus on sustainable energy                                 |
|                      | `programming   ` | Focus on learning programming                               |

You can mix and match tags as needed for clarity and filtering. For example:

```yaml
---
title: "Introduction to Robocode"
tags: [java, robocode, all-ages, beginner, cs]
---
```
