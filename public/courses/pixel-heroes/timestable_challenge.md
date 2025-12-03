# Challenge: Multiple Times Tables

Show multiple times tables chosen by the user!

## What to Do
1. Ask how many tables
2. For each, ask which number
3. Print each table!

```python
print("=== MULTIPLE TIMES TABLES ===")
print()

# Ask how many tables to show
count = input("How many times tables do you want to see? ")
how_many = int(count)

print()

# Show each times table
for table_num in range(how_many):
    # Ask which table
    table = input(f"Enter times table #{table_num + 1}: ")
    table_number = int(table)
    
    print()
    print(f"=== {table_number} TIMES TABLE ===")
    
    # Print the times table
    for number in range(1, 11):
        answer = table_number * number
        print(f"{table_number} x {number} = {answer}")
    
    print()

print("All done! Great practice!")
```

## Remember
- Loops can be inside loops (nested loops!)
- `table_num + 1` makes numbering start at 1
- Outer loop repeats, inner loop does 1-10

## Try This
Add fireworks back to each answer!

## If Stuck
- Outer loop repeats the whole table
- Inner loop does 1-10
- Use `table_num + 1` for friendly numbers

**CHALLENGE COMPLETE!** 🎉
