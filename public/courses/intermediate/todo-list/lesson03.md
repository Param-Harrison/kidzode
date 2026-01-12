# Adding and Removing 📝

## Quick Reminder
You built a menu loop with choices. Now let's actually manage tasks!

## Your Mission
Time to put it all together! We'll:
1. Store tasks in a list
2. Add tasks with `.append()`
3. View tasks with a loop
4. Clear all tasks with `.clear()`

## The Full Pattern
```python
tasks = []  # Empty list to start

while True:
    # Show menu
    # Get choice
    if choice == "1":
        new_task = input("What task? ")
        tasks.append(new_task)
    elif choice == "2":
        for task in tasks:
            print("- " + task)
```

## Try It!
1. Run the code
2. Add a few tasks
3. View your tasks
4. Try clearing them all!

## What You Learned
✅ Store tasks in a list
✅ `.append()` adds new items
✅ Loop through to show all tasks
✅ `.clear()` removes everything

## Achievement Unlocked! 🏆
You built a working task manager app!
