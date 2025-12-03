# Choose Your Times Table

Let the user choose which times table to see!

## What to Do
1. Press Run
2. Type a number like 7 or 9!

```python
print("=== TIMES TABLE PRACTICE ===")
print()

# Ask which times table they want
table = input("Which times table do you want to practice? (1-12): ")
table_number = int(table)

print()
print(f"=== {table_number} TIMES TABLE ===")
print()

for number in range(1, 11):
    answer = table_number * number
    print(f"{table_number} x {number} = {answer} ✨")

print()
print(f"Great job practicing your {table_number}s!")
```

## Remember
- `int(table)` converts text to a number
- Use the user's number in multiplication
- Same loop works for any table!

## Try This
Try 12 for the hardest, or 2 for easy!

## If Stuck
- Use `int(table)` to convert
- Multiply by `table_number`

You did it! ⭐
