# List Superpowers!

Excellent, String Indexer! You can grab letters from words!
Lists have SUPERPOWERS too!
Can you add, remove, and change items in lists?

## 🎯 Today's Mission
Learn to modify lists like a pro!

## 📚 Before You Start
You know how to create lists and use `random.choice()`.

## Let's Do It!

```python
print("=== LIST SUPERPOWERS ===")
print()

# Start with an empty list
my_list = []
print(f"Empty list: {my_list}")

# Add items with .append()
my_list.append("apple")
my_list.append("banana")
my_list.append("cherry")
print(f"After adding: {my_list}")

# Get an item by position
print(f"First item: {my_list[0]}")
print(f"Second item: {my_list[1]}")

# How many items?
print(f"List has {len(my_list)} items")

# Remove an item
my_list.remove("banana")
print(f"After removing banana: {my_list}")

print()
print("List superpowers unlocked!")
```

## ✨ Magic Moment
You can build and modify lists on the fly!

## 💡 Important Things to Remember
- `.append(item)` adds to the end
- `.remove(item)` removes the item
- `len(list)` tells you how many items
- `list[0]` gets the first item (like strings!)

## 🔮 Try to Predict!
What happens after these commands?
```python
fruits = ["apple"]
fruits.append("banana")
fruits.append("cherry")
```
Answer: `["apple", "banana", "cherry"]`

## 🎨 Try This Next!
```python
# Build a shopping list
shopping = []
shopping.append("milk")
shopping.append("eggs")
shopping.append("bread")
print(f"Shopping list: {shopping}")
print(f"Need to buy {len(shopping)} things")
```

## 🤔 Common Mistakes
**Mistake**: Forgetting parentheses
```python
my_list.append "item"  # ❌ Missing ()
```
**Fix**: `my_list.append("item")`

**Mistake**: Trying to remove something not in list
```python
fruits = ["apple"]
fruits.remove("banana")  # ❌ Not in list!
```
**Fix**: Check if it's there first!

## 📝 Self-Check Quiz
1. How do you add an item to a list?
2. How do you find out how many items are in a list?
3. What position is the first item?

<details>
<summary>Click for Answers</summary>

1. `list.append(item)`
2. `len(list)`
3. Position 0
</details>

## 🚀 Level Up Challenge!
Make a to-do list program:
```python
tasks = []
tasks.append("homework")
tasks.append("clean room")
tasks.append("practice piano")

print("TO-DO LIST:")
for task in tasks:
    print(f"- {task}")

print(f"Total tasks: {len(tasks)}")
```

## 🌟 Show Your Parents!
"Look! I can build and modify lists - adding and removing items!"

You just unlocked the **List Master** superpower! ⭐
