# Inside the Dictionary 🔍

## Quick Reminder
You learned that dictionaries store key:value pairs. Now let's make them more detailed!

## Your Mission
What if we want to store BOTH temperature AND weather status for each city? We can nest dictionaries!

## Dictionaries Inside Dictionaries
```python
cities = {
    "London": {"temp": 15, "status": "Rainy"},
    "Tokyo": {"temp": 28, "status": "Sunny"}
}
```

Each city has its OWN dictionary with `temp` and `status`!

## Accessing Nested Values
```python
cities["London"]           # Gets: {"temp": 15, "status": "Rainy"}
cities["London"]["temp"]   # Gets: 15
cities["London"]["status"] # Gets: "Rainy"
```

Think of it like opening a folder, then opening a file inside!

## Try It!
1. Run the code
2. See both temp and status for each city
3. Add a new city with its own temp and status!

## What You Learned
✅ Dictionaries can contain other dictionaries
✅ Use two brackets to go deep: `dict["key1"]["key2"]`
✅ Great for organizing complex data!
