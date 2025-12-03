# Add and Remove from Lists

Lists can grow and shrink! Start with an empty list, add items, then remove them. Press Run to see it in action!

```python
# Start with an empty list
my_list = []

# Add items
my_list.append("apple")
my_list.append("banana")
my_list.append("cherry")
print(f"After adding: {my_list}")

# Get items by position
print(f"First item: {my_list[0]}")

# How many items?
print(f"List has {len(my_list)} items")

# Remove an item
my_list.remove("banana")
print(f"After removing: {my_list}")
```

**Superpowers:** `.append(item)` adds to the end of the list. `.remove(item)` removes it. `len(list)` tells you how many items are in the list!

Try building your own shopping list - add things you need, then remove them as you "buy" them!
