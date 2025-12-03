# Challenge: Custom Countdown

Challenge time! Let the user choose the starting number. Ask for a number, convert it with `int()`, then count down from their number!

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

**Important:** `int()` converts text to a number. `input()` always gives text, so you need to convert it before using it in `range()`. Use `int(start)` to convert, then use `start_number` in `range()`.

Want to make it harder? Add error checking for wrong input - what if they type "hello" instead of a number?
