# City Lookup 🔎

## Quick Reminder
You can store and access complex data in nested dictionaries. But what if someone searches for a city that doesn't exist?

## Your Mission
A good app handles mistakes gracefully. Let's check if a city exists before looking it up!

## The Problem
```python
cities["Unknown"]  # CRASH! KeyError!
```

Python crashes if the key doesn't exist!

## The Solution: Check First!
```python
city = input("Enter a city: ")

if city in cities:
    print("Weather:", cities[city])
else:
    print("Sorry, city not found!")
```

`in` checks if the key exists in the dictionary.

## Try It!
1. Run the code
2. Search for "London" (should work)
3. Search for "Mars" (should show friendly error)

## What You Learned
✅ Use `if key in dictionary:` to check if it exists
✅ Always check before accessing to avoid crashes
✅ Show friendly messages when something isn't found!
