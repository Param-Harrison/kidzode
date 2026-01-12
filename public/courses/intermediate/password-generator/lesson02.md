# Building the Password ➰

## Quick Reminder
You created a "character bank" with letters, numbers, and symbols. Now let's pick random characters from it!

## Your Mission
To make an 8-character password, we need to:
1. Pick a random character
2. Add it to our password
3. Repeat 8 times

## Building Piece by Piece
We start with an empty password and add one character at a time:

```python
password = ""              # Start empty
password = password + "a"  # Now it's "a"
password = password + "b"  # Now it's "ab"
```

This is called "accumulating" — we keep adding to what we have!

## The Loop
Instead of writing 8 lines, we use a loop:

```python
for count in range(8):
    char = random.choice(chars)  # Pick a random character
    password = password + char    # Add it to the password
```

## Try It!
1. Run the code
2. See your random password appear!
3. Run again — you'll get a different password each time!

## What You Learned
✅ Start with an empty string `""`
✅ Use a loop to repeat the picking process
✅ Add each new character with `+`
