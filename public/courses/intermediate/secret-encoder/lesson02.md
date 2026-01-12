# The Simple Shift ⚙️

## Quick Reminder
You learned that every letter has a secret number (A=65, B=66, etc.). Now let's use this to hide messages!

## Your Mission
To hide a letter, we "shift" it by adding a number. This is called a **Caesar Cipher** — named after Julius Caesar who used it 2000 years ago!

## How It Works
```
A (65) + 1 = 66 = B
B (66) + 1 = 67 = C
H (72) + 1 = 73 = I
```

If someone doesn't know the shift number, they can't read your message!

## The Process
1. Get the letter's secret number: `ord("A")` → 65
2. Add the shift: `65 + 1` → 66  
3. Turn back to a letter: `chr(66)` → "B"

## Try It!
1. Run the code to see "A" become "B"
2. Change the shift from 1 to 5
3. What does "A" become with a shift of 5?

## What You Learned
✅ Shifting means adding to the letter's number
✅ A bigger shift = more hidden
✅ You need to know the shift to decode!
