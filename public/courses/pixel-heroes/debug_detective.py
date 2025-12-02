# Example of good debugging practice
print("=== DEBUGGING PRACTICE ===")
print()

# Use descriptive variable names
for count in range(1, 6):
    # Add debug prints to see what's happening
    print(f"Loop iteration: {count}")
    result = count * 2
    print(f"Result: {result}")
    print()

print("Debugging complete!")
