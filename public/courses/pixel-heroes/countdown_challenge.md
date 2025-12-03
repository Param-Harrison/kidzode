# Challenge: Custom Countdown

Let the user choose the starting number!

## What to Do
1. Ask for a starting number
2. Convert it with `int()`
3. Count down from their number!

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

## Remember
- `int()` converts text to a number
- `input()` always gives text
- Convert to int before using in `range()`

## Try This
Add error checking for wrong input!

## If Stuck
- Use `int(start)` to convert
- Use `start_number` in `range()`

**CHALLENGE COMPLETE!** 🎉
