# Find and Fix Errors

Made a mistake? Don't worry! Python's error messages help you find bugs. Here are common mistakes and how to fix them:

**Missing Colon:**
```python
for i in range(5)  # Missing :
    print("Hello")
```
Add `:` at the end!

**Wrong Indentation:**
```python
for i in range(5):
print("Hello")  # Not indented
```
Add 4 spaces or press Tab! Indented code goes inside the loop.

**Misspelled Words:**
```python
pront("Hello")  # Should be "print"
```
Check spelling! Python doesn't know what `pront` means.

**Unmatched Quotes:**
```python
print("Hello)  # Missing closing quote
```
Make quotes match! Every `"` needs a closing `"`.

**Debug Trick:** Add `print()` to see what's happening:
```python
for number in range(1, 6):
    print(f"DEBUG: number is {number}")
    result = number * 2
    print(f"DEBUG: result is {result}")
```

Try fixing this: `for i in range(5)` (what's missing?)
