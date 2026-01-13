# Counting Clues 🔢

## Quick Reminder
In the last lesson, you used a **backpack** (a List) to store your suspects. Great job, Detective! 🕵️‍♂️

## Your Mission
We've found a pile of evidence at the scene of the cookie crime. But how much stuff did we find? A good detective always counts their clues before starting the investigation!

## The Detective's Ruler: len() 📏
Counting 100 items by hand is boring. Luckily, Python has a magic tool called `len()` (short for **len**gth).

It's like a special scanner that tells you exactly how many items are inside your list.

```python
clues = ["Muddy Shoe", "Torn Ticket", "Lost Key"]
number_of_clues = len(clues)
print(number_of_clues)  # This will show: 3
```

## How to talk like a pro
You can even put the count into a helpful sentence:
```python
print("Detective, we found", len(clues), "pieces of evidence!")
```

## Try It!
1. Check out the `clues` list in the code.
2. Click **Run** and see the computer count everything for you.
3. **Challenge:** Add two more clues to the list (like `"Cookie Crumb"` or `"Blue Fur"`) and run it again. Does the number change?

## What You Learned
✅ `len()` counts how many items are in a list.
✅ It stands for "length."
✅ It's the fastest way to measure your data!

## Pro Tip
`len()` doesn't just work for clues; it can count students in a class, players in a game, or even the stars in a galaxy! 🌌
