# Encoding a Word 📝

## Quick Reminder
You learned to shift ONE letter. Now let's encode a whole word!

## Your Mission
To encode a word like "HELLO", we need to shift EACH letter, one at a time.

## The Loop Pattern
```python
for letter in word:
    # Shift this letter
    # Add it to our secret message
```

This means: "For each letter in the word, do something with it."

## Building the Secret Message
We start with an empty secret and add each shifted letter:

```python
secret = ""
for letter in word:
    shifted = chr(ord(letter) + shift)
    secret = secret + shifted
```

## Try It!
1. Run the code to see "Python" become a secret
2. Try encoding your name!
3. Try different shift values

## What You Learned
✅ Loop through each letter with `for letter in word:`
✅ Shift each letter using `ord()` and `chr()`
✅ Build up the secret message piece by piece
