---
title: "5 - Hello World"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - beginner
---
> Let’s jump into **5 - Hello World** 🎉

# 🧪 Your First Java Program

Now that your Java tools are ready, it’s time to write your very first Java program! This tiny adventure checks that everything’s working — and gives your computer its first friendly greeting from you 🤗.

## 📂 Step 2: Create Your Robot Lab

1. Create your `HelloWorldTest` folder on your desktop.
2. Inside VS Code, go to **File → Open Folder...** and choose your `HelloWorldTest` folder.
3. Create a `src` folder — this is where your Java magic will live!
4. If VS Code asks whether you **trust** the workspace, choose **Trust** and install any recommended extensions.


## ✅ Step 3: Prep for First Program

Make sure everything is installed and working — we’ll write our first program on the next page! 😄

## ✍️ Write the Code

1. In your `src` folder, create a new file named `HelloWorld.java`
2. Type or paste in the following code:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

## 🏃‍♀️ Run the Program

Use your terminal in VS Code
* **Windows:** choose PowerShell or Command Prompt via **Terminal → New Terminal**.
* **macOS:** open the integrated terminal or use the macOS **Terminal** app.

```bash
javac HelloWorld.java
java HelloWorld
```

If everything is set up, you’ll see:

```
Hello World!
```

🎉 Woohoo! That means Java is working, and you're ready to start building robots!

[What does javac and java do?](/robocode/Day-1/javacompile)


[That was confusing, what else is programming like?](/robocode/extras/bread)

---

➡️ [🤖 Minigame!](/robocode/Day-1/04_minigame)


---


## 🗺️ Navigation

⬅️ [Back: Setting Up Robocode](/robocode/Day-1/02_setting_up)
➡️ [Next: Day 2 - Robocode Intro](/robocode/Day-2/00_robocode_intro)
