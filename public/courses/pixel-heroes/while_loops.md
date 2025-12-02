# Keep Playing with While Loops!

Awesome, Championship Game Creator! Your games are fun!
But they only run ONCE! Wouldn't it be cool to play again and again?
Can you make games that keep running until you want to stop?

## 🎯 Today's Mission
Learn `while` loops to make programs that keep going!

## 📚 Before You Start
You know how to use `for` loops for a set number of times.

## The Difference

**For Loop**: Repeats a SPECIFIC number of times
```python
for i in range(5):  # Exactly 5 times
    print("Hello")
```

**While Loop**: Repeats UNTIL something changes
```python
keep_going = True
while keep_going:  # Until keep_going becomes False
    print("Hello")
    keep_going = False  # Stop after once
```

## Let's Do It!

```python
print("=== KEEP PLAYING ===")
print()

playing = True

while playing:
    print("=== GUESSING GAME ===")
    secret = 7
    guess = input("Guess a number (1-10): ")
    
    if guess.isdigit():
        if int(guess) == secret:
            print("You got it!")
        else:
            print(f"Nope! It was {secret}")
    
    # Ask if they want to play again
    again = input("Play again? (yes/no): ").strip().lower()
    
    if again != "yes":
        playing = False
        print("Thanks for playing!")

print("Game over!")
```

## ✨ Magic Moment
The game keeps running until you say "no"!

## 💡 Important Things to Remember
- `while condition:` repeats while condition is `True`
- You MUST change the condition eventually or it loops forever!
- Use `break` to exit immediately
- Great for "play again" features!

## 🔮 Try to Predict!
How many times will this run?
```python
count = 0
while count < 3:
    print(count)
    count = count + 1
```
Answer: 3 times (0, 1, 2)

## 🎨 Try This Next!
```python
# Menu system
while True:
    print("\n=== MENU ===")
    print("1. Say Hello")
    print("2. Say Goodbye")
    print("3. Exit")
    
    choice = input("Choose: ")
    
    if choice == "1":
        print("Hello!")
    elif choice == "2":
        print("Goodbye!")
    elif choice == "3":
        print("Exiting...")
        break  # Exit the loop!
    else:
        print("Invalid choice!")
```

## 🤔 Common Mistakes
**Mistake**: Infinite loop (never stops!)
```python
while True:
    print("Forever!")  # ❌ Never stops!
```
**Fix**: Add a way to exit with `break` or change condition!

**Mistake**: Condition never becomes True
```python
x = 5
while x < 3:  # Never runs!
    print("Hello")
```
**Fix**: Check your starting condition!

## 📝 Self-Check Quiz
1. What's the difference between `for` and `while`?
2. How do you exit a `while` loop immediately?
3. What happens if the condition is always `True`?

<details>
<summary>Click for Answers</summary>

1. `for` runs a set number of times, `while` runs until condition changes
2. Use `break`
3. Infinite loop (runs forever!)
</details>

## 🚀 Level Up Challenge!
Make a countdown that asks to continue:
```python
number = 10
while number > 0:
    print(number)
    number = number - 1
    
    if number == 5:
        cont = input("Continue? (yes/no): ")
        if cont.lower() != "yes":
            break

print("Done!")
```

## 🌟 Show Your Parents!
"Look! My games can now keep playing until I want to stop!"

You just unlocked the **Infinite Possibilities** superpower! ⭐

**Pro Tip**: Always make sure your `while` loops have a way to stop!
