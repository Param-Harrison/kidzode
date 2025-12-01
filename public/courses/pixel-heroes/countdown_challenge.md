# Custom Countdown Challenge

You're a Sound Effects Master! Your rocket launch is amazing!
But what if you want to launch from different numbers?
Can you let the user choose where to start the countdown?

## 🎯 Today's Mission
Let the user choose the starting number for the countdown!

## 📚 Before You Start
You know how to use `input()` and `range()` for countdowns.

## Your Challenge!
1. Ask the user for a starting number
2. Convert it to an integer with `int()`
3. Count down from their number to 1
4. BLAST OFF!

```python
print("=== CUSTOM ROCKET LAUNCH ===")
print()

# Ask user for starting number
start = input("Enter countdown start number (like 10 or 20): ")
start_number = int(start)

print()
print(f"Starting countdown from {start_number}!")
print("Engines starting... RUMBLE RUMBLE")
print()

# Countdown from user's number to 1
for number in range(start_number, 0, -1):
    print(f"T-minus {number}... BEEP!")

print()
print("BLAST OFF! WHOOOOSH!")
print("ROAR! The rocket is launching!")
print("Mission success!")
```

## ✨ Magic Moment
The countdown starts from ANY number the user chooses!

## 💡 Important Things to Remember
- `int()` converts text to a number
- `input()` always gives you text, even if the user types a number
- You MUST convert to int before using in `range()`
- The user can choose 5, 10, 20, or even 100!

## 🎨 Try This Next!
- Add error checking (what if they type "hello"?)
- Add a minimum countdown (must be at least 3)
- Let them choose the countdown speed!

## 🤔 Stuck? Check This!
- **Error: invalid literal?** Make sure you're using `int(start)`
- **Counting wrong?** Check that you're using `start_number` in `range()`
- **Want to test?** Try entering 5, then 15, then 3!

## 🌟 Show Your Parents!
"Look! I made a customizable rocket launch - you can choose any starting number!"

You just unlocked the **Custom Launch Director** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 5! 🎉
