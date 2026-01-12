# The Main Menu Loop 🔄

## Quick Reminder
You created a function to show the menu. Now let's make the app run until YOU decide to quit!

## Your Mission
A real app keeps running until you tell it to stop. We need a loop that runs forever... until you say "Exit"!

## The Forever Loop
```python
while True:
    # This code runs forever!
```

`while True` means "keep doing this while True is True" — and True is ALWAYS True! So it loops forever.

## Stopping the Loop
We use `break` to escape:
```python
while True:
    choice = input("Pick: ")
    if choice == "3":
        break  # Escape the loop!
```

## Making Choices with if/elif
```python
if choice == "1":
    print("You picked 1!")
elif choice == "2":
    print("You picked 2!")
else:
    print("Unknown choice!")
```

## Try It!
1. Run the code
2. Try picking different numbers
3. Pick "3" to exit!

## What You Learned
✅ `while True:` loops forever
✅ `break` stops the loop
✅ `if/elif/else` handles different choices
