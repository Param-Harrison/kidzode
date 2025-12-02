# Handle Mistakes Like a Pro!

Great detective work! You can fix errors!
But what if users type the WRONG thing?
Can you make programs that don't crash?

## 🎯 Today's Mission
Learn to handle user mistakes gracefully!

## 📚 Before You Start
You know how to use `input()` and `int()` to get numbers.

## The Problem

This code CRASHES if you type "hello":
```python
age = input("How old are you? ")
age_number = int(age)  # ❌ CRASH if age is "hello"!
print(f"You are {age_number} years old!")
```

## The Solution: Check First!

```python
print("=== SMART INPUT ===")
print()

# Get input
age = input("How old are you? ")

# Check if it's a number
if age.isdigit():
    age_number = int(age)
    print(f"You are {age_number} years old!")
else:
    print("Oops! Please enter a number next time!")
```

## ✨ Magic Moment
The program doesn't crash - it gives a helpful message instead!

## 💡 Important Things to Remember
- `.isdigit()` checks if text contains only numbers
- Always check input before converting with `int()`
- Give helpful error messages
- This makes programs feel professional!

## 🔮 Try to Predict!
What happens if you type "25" vs "twenty-five"?
Answer: "25" works, "twenty-five" shows error message!

## 🎨 Try This Next!
```python
print("=== GUESS MY NUMBER ===")
print()

secret = 7
guess = input("Guess a number (1-10): ")

if guess.isdigit():
    guess_number = int(guess)
    
    if guess_number == secret:
        print("You got it!")
    elif guess_number < secret:
        print("Too low!")
    else:
        print("Too high!")
else:
    print("That's not a number!")
```

## 🤔 Common Mistakes
**Mistake**: Forgetting to check before converting
```python
number = int(input("Enter number: "))  # ❌ Can crash!
```
**Fix**: Check first with `.isdigit()`!

**Mistake**: Mean error messages
```python
print("ERROR! You're so dumb!")  # ❌ Not nice!
```
**Fix**: Be helpful: "Oops! Please enter a number!"

## 📝 Self-Check Quiz
1. What does `.isdigit()` check?
2. When should you check input?
3. What makes a good error message?

<details>
<summary>Click for Answers</summary>

1. If text contains only numbers (0-9)
2. BEFORE converting with `int()`
3. Helpful, friendly, tells user what to do
</details>

## 🚀 Level Up Challenge!
Make a calculator that handles mistakes:
```python
print("=== SAFE CALCULATOR ===")

num1 = input("First number: ")
num2 = input("Second number: ")

if num1.isdigit() and num2.isdigit():
    result = int(num1) + int(num2)
    print(f"Answer: {result}")
else:
    print("Please enter numbers only!")
```

## 🌟 Show Your Parents!
"Look! My programs don't crash anymore - they handle mistakes gracefully!"

You just unlocked the **Error Handler** superpower! ⭐

**Pro Tip**: Real programmers spend a lot of time handling errors. It's what makes software feel polished!
