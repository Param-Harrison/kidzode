# Better Data 🪐

## Your Mission
Ready to explore the galaxy, Explorer? 🚀 We’re building a digital encyclopedia of the universe! A list is great for names like `["Mars", "Earth"]`, but what if we want to store the **Color**, the **Size**, and the **Number of Moons** all in one spot?

## The Problem with Lists
If we use a list of numbers like `[6779, 2]`, we might forget which one is the size and which one is the moon count. Is 2 the size?! That would be a tiny planet! 😱

## The Solution: The DICTIONARY 📖
A **Dictionary** is like a labeled shelf. Instead of just throwing items into a backpack, you put them on a shelf with a sticky note explaining what they are.

In Python, we use curly brackets `{}` to make a dictionary:

```python
mars = {
    "name": "Mars",
    "color": "Red",
    "moons": 2
}
```

**Explorer's Guide:**
- The sticky note (like `"color"`) is called a **Key**.
- The item itself (like `"Red"`) is called a **Value**.
- They are connected by a colon `:` like a team!

## How to use your shelf
Just like opening a phone contact, you use the label to get the info:
```python
print(mars["color"])  # This shows: Red
```

## Try It!
1. Look at the variable `mars` on the right.
2. Click **Run** to see the computer pull data from its labeled shelves.
3. **Challenge:** Add a new label called `"rings"` and set it to `False`.

## What You Learned
✅ **Dictionaries** store data with labels (Keys).
✅ We use `{` curly brackets `}` to create them.
✅ You access data using the name of the label inside `[]` brackets.

## Fun Fact
Dictionaries are one of the most powerful tools in coding. Every time you log into a website, a dictionary is used to find your username and password! 🔐
