---
title: "3 - Refactoring Tips"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Cleaner code makes it easier to expand your robot's abilities.

# Refactor Checklist

1. **Extract Helper Methods** – move repeated code from `run()` into named methods.
2. **Clarify Names** – choose descriptive method and variable names (`scanForEnemies()` instead of `check`).
3. **Limit Long Methods** – if a method grows past ~20 lines, consider splitting it.
4. **Comment Complex Logic** – brief comments help others (and you) understand tricky sections.
5. **Consistent Formatting** – use your IDE's auto-formatting to keep braces and indentation tidy.

Refactoring keeps your bot maintainable while you iterate on new strategies.
