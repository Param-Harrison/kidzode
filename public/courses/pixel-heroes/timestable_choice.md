# Choose Your Times Table

Amazing, Victory Celebrator! Your 5 times table is fun!
But what if you want to practice a DIFFERENT times table?
Can you let the user choose which one to practice?

## 🎯 Today's Mission
Let the user choose which times table to see!

## 📚 Before You Start
You know how to use `input()` and `int()` to get numbers from users.

## Let's Do It!
1. Read the code - see the user choosing the table!
2. Press the green **Run** button
3. Type a number like 7 or 9!

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

## ✨ Magic Moment
You can practice ANY times table you want!

## 💡 Important Things to Remember
- `int(table)` converts the text input to a number
- You can use the user's number in multiplication
- The same loop works for any times table!
- This makes the program way more useful!

## 🎨 Try This Next!
Try entering 12 for the hardest times table, or 2 for an easy one!

## 🤔 Stuck? Check This!
- **Error: invalid literal?** Make sure you're using `int(table)`
- **Wrong table?** Check you're multiplying by `table_number`
- **Want to practice more?** Run the program again with a different number!

## 🌟 Show Your Parents!
"Look! I made a times table practice tool - I can choose any table I want!"

You just unlocked the **Custom Math Teacher** superpower! ⭐
