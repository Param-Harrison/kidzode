# Is it there? 🔎

Before we fight a monster, we need to check if we have a weapon!
We can loop through our backpack and search.

### The Search Loop
```python
found_weapon = False

for item in backpack:
    if item["type"] == "Weapon":
        print("Detailed weapon found!")
        found_weapon = True
```

### Your Goal
1. Create a backpack with some items.
2. Loop through the list.
3. Check `if item["type"] == "Food"`.
4. If found, print "Yum! Found a snack!".

### Achievement
🕵️‍♂️ **Item Hunter**: You can search your data!
