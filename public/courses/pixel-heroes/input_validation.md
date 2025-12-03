# Handle User Mistakes

Sometimes people type the wrong thing. Let's make our programs handle mistakes nicely instead of crashing!

**The Problem:** This crashes if someone types "hello" instead of a number:
```python
age = input("How old are you? ")
age_number = int(age)  # CRASH!
```

**The Solution:** Check first, then convert!

```python
age = input("How old are you? ")

# Check if it's a number
if age.isdigit():
    age_number = int(age)
    print(f"You are {age_number} years old!")
else:
    print("Oops! Please enter a number!")
```

**How it works:** `.isdigit()` checks if the text is only numbers. If yes, we convert it. If no, we show a friendly message instead of crashing!

Try making a number guessing game that checks if the input is a number before guessing!
