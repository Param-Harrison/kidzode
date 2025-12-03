# Add Rocket

Make your countdown look like a real rocket launch! Press Run and watch the countdown!

```python
print("=== ROCKET LAUNCH SEQUENCE ===")
print()

# Countdown from 10 to 1
for number in range(10, 0, -1):
    print(f"T-minus {number}...")

print()
print("BLAST OFF! 🚀")
print("The rocket is launching!")
```

**The trick:** `print()` with nothing makes a blank line - great for spacing! `f"T-minus {number}..."` puts the number in the text. Don't forget the `f` before the quotes - that makes it a format string!

Add more lines after BLAST OFF - describe what happens next!
