# Challenge: Multiple Times Tables

Challenge time! Show multiple times tables chosen by the user. Ask how many tables they want, then for each one ask which number, and print each table!

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

**The trick:** Loops can be inside loops (nested loops)! The outer loop repeats the whole table process. The inner loop does 1-10. `table_num + 1` makes numbering start at 1 (friendly numbers).

Want to make it more fun? Add fireworks back to each answer - celebrate every correct answer!
