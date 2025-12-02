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
