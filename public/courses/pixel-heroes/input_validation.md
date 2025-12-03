# Handle User Mistakes

Make programs that don't crash when users type wrong things!

## The Problem

This crashes if you type "hello":
```python
age = input("How old are you? ")
age_number = int(age)  # CRASH!
```

## The Solution

Check first!

```python
age = input("How old are you? ")

# Check if it's a number
if age.isdigit():
    age_number = int(age)
    print(f"You are {age_number} years old!")
else:
    print("Oops! Please enter a number!")
```

## Remember
- `.isdigit()` checks if text is numbers only
- Check before converting with `int()`
- Give helpful error messages

## Try This
Make a number guessing game that checks input!

## If Stuck
- Always check with `.isdigit()` first
- Be friendly in error messages

You did it! ⭐
