# Answer

Here's the complete solution:

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

**Remember:** Try solving it yourself first! Understanding how nested loops work is more important than just copying the answer. You can add fireworks to make it more fun!

