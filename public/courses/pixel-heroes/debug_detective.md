# Be a Code Detective!

Awesome, Number Master! You're building amazing programs!
But sometimes code has BUGS (mistakes)!
Can you become a detective and find errors in code?

## 🎯 Today's Mission
Learn to read error messages and fix broken code!

## 📚 Before You Start
You know how to write loops and use turtle graphics.

## Let's Do It!
1. Read about common errors!
2. Learn to be a detective!
3. Practice fixing bugs!

## 🔍 Detective Skill 1: Reading Error Messages

When Python finds an error, it tells you! Let's learn to read the clues:

```python
# This code has an error - can you spot it?
print("=== DETECTIVE PRACTICE ===")

for i in range(5)
    print("Hello")
```

**Error Message:**
```
SyntaxError: invalid syntax
```

**What it means**: You forgot something in your code!
**The clue**: Look at the line with `for` - missing the `:`!

## 🔍 Detective Skill 2: Common Errors

### Error 1: Missing Colon
```python
for i in range(5)  # ❌ Missing :
    print("Hello")
```
**Fix**: Add `:` at the end!

### Error 2: Wrong Indentation
```python
for i in range(5):
print("Hello")  # ❌ Not indented
```
**Fix**: Add 4 spaces or press Tab!

### Error 3: Misspelled Words
```python
pront("Hello")  # ❌ Should be "print"
```
**Fix**: Check spelling carefully!

### Error 4: Unmatched Quotes
```python
print("Hello)  # ❌ Missing closing quote
```
**Fix**: Make sure quotes match: `"..."` or `'...'`

## 🔍 Detective Skill 3: Print Debugging

Not sure what's happening? Add `print()` to see!

```python
# Use print to see what's happening
for number in range(1, 6):
    print(f"DEBUG: number is {number}")  # Detective print!
    result = number * 2
    print(f"DEBUG: result is {result}")  # See the result!
    print(result)
```

## 🔮 Try to Predict!
What's wrong with this code?
```python
for i in range(3):
print(i)
```
Answer: Not indented! Should be 4 spaces in.

## 🎨 Try This Next!
Fix this broken code:
```python
for i in range(5)
    pront("Hello")
```

## 🤔 Common Mistakes
**Mistake**: Giving up when you see an error
**Fix**: Read the error message! It's trying to help you!

**Mistake**: Changing random things hoping it works
**Fix**: Think about what the error means first!

## 📝 Self-Check Quiz
1. What does "SyntaxError" usually mean?
2. How do you check what a variable contains?
3. What's the most common fix for indentation errors?

<details>
<summary>Click for Answers</summary>

1. You forgot something (like : or quotes)
2. Use `print()` to see it
3. Add 4 spaces or press Tab
</details>

## 🚀 Level Up Challenge!
Find and fix ALL 3 errors in this code:
```python
for i in range(10)
print(i * 2
    print("Done")
```

<details>
<summary>Hint</summary>

1. Missing `:` after range(10)
2. Missing `)` after i * 2
3. Wrong indentation on "Done"
</details>

## 🌟 Show Your Parents!
"Look! I can read error messages and fix my own code like a detective!"

You just unlocked the **Code Detective** superpower! ⭐

**Remember**: Errors are NORMAL! Even expert programmers get them. The difference is knowing how to fix them!
