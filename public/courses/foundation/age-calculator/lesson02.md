# Text vs Numbers 🔤🔢

## Quick Reminder
You learned that `input()` asks questions and saves answers. But there's a trick!

## The Problem
When you type `10` with `input()`, Python thinks it's TEXT, not a number!

```python
age = input("How old are you? ")
# If you type 10, Python sees it as "10" (text)
```

Why does this matter? Because **you can't do math with text!**

## The Fix: int()
We use `int()` to turn text into a real number:

```python
age_text = input("How old are you? ")
age = int(age_text)        # Now it's a number!
next_year = age + 1        # Math works!
```

Think of it like this:
- `"10"` = the word "ten" (can't do math)
- `10` = the number 10 (can do math!)

## Try It!
1. Run the code
2. Type your age
3. Watch Python add 1 to it!

## What You Learned
✅ `input()` always gives you text
✅ Text looks like numbers but isn't
✅ Use `int()` to turn text into a real number
