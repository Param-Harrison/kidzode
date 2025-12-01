# Multiple Times Tables Challenge

Perfect, Custom Math Teacher! You can practice any table!
But what if you want to see MULTIPLE tables at once?
Can you show several times tables in one program?

## 🎯 Today's Mission
Print multiple times tables chosen by the user!

## 📚 Before You Start
You know how to use loops and get user input with `int()`.

## Your Challenge!
1. Ask how many tables the user wants to see
2. For each table, ask which number
3. Print each complete times table!

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

## ✨ Magic Moment
You can see as many times tables as you want in one go!

## 💡 Important Things to Remember
- You can have loops INSIDE loops (nested loops!)
- `table_num + 1` makes the numbering start at 1 instead of 0
- Each table prints completely before asking for the next one
- This is like having a personal math tutor!

## 🎨 Try This Next!
- Add fireworks back to each answer
- Let the user choose how many rows (not just 1-10)
- Add a quiz mode that asks questions!
- Save the tables to review later

## 🤔 Stuck? Check This!
- **Confused by nested loops?** The outer loop repeats the whole table, inner loop does 1-10
- **Numbering starts at 0?** Use `table_num + 1` to show human-friendly numbers
- **Want to test?** Try entering 2, then 3 and 7 to see both tables

## 🌟 Show Your Parents!
"Look! I made a complete times table practice tool - I can see as many as I want!"

You just unlocked the **Math Master** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 7! 🎉
