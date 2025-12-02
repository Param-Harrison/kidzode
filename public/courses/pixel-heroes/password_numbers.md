# Add Numbers to Your Password

Great work, Security Expert! Your letter passwords are good!
But hackers can crack letter-only passwords easily!
Let's make them STRONGER by adding numbers!

## 🎯 Today's Mission
Create a password with 6 letters AND 2 numbers!

## 📚 Before You Start
You know how to generate random letters using `random.choice()` and loops.

## Let's Do It!
1. Read the code - see letters AND numbers!
2. Press the green **Run** button
3. Get a stronger password!

```python
import random

# All possible characters
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
numbers = "0123456789"

# Build password with 6 letters
password = ""

for i in range(6):
    password = password + random.choice(letters)

# Add 2 numbers
for i in range(2):
    password = password + random.choice(numbers)

print("=== STRONG PASSWORD GENERATOR ===")
print()
print(f"Your password is: {password}")
print(f"Length: {len(password)} characters")
```

## ✨ Magic Moment
Your password now has letters AND numbers - much harder to crack!

## 💡 Important Things to Remember
- `numbers = "0123456789"` is a string of all digits
- We use TWO separate loops - one for letters, one for numbers
- `len(password)` tells you how long the password is
- Mixing letters and numbers makes passwords stronger!

## 🎨 Try This Next!
Change to 8 letters and 4 numbers for an even stronger password!

## 🤔 Stuck? Check This!
- **No numbers?** Make sure you have the second `for` loop
- **All numbers at the end?** That's normal! We add letters first, then numbers
- **Want to mix them?** We'll learn how in the next lesson!

## 🌟 Show Your Parents!
"Look! My passwords now have letters AND numbers - they're super secure!"

You just unlocked the **Strong Password Creator** superpower! ⭐
