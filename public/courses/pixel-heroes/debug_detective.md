# Find and Fix Errors

Learn to read error messages and fix bugs!

## Common Errors

### Missing Colon
```python
for i in range(5)  # Missing :
    print("Hello")
```
**Fix**: Add `:` at the end!

### Wrong Indentation
```python
for i in range(5):
print("Hello")  # Not indented
```
**Fix**: Add 4 spaces or press Tab!

### Misspelled Words
```python
pront("Hello")  # Should be "print"
```
**Fix**: Check spelling!

### Unmatched Quotes
```python
print("Hello)  # Missing closing quote
```
**Fix**: Make quotes match!

## Debug with Print

Add `print()` to see what's happening:

```python
for number in range(1, 6):
    print(f"DEBUG: number is {number}")
    result = number * 2
    print(f"DEBUG: result is {result}")
```

## Remember
- Read error messages - they help!
- Check for missing `:` and quotes
- Use indentation correctly
- Add `print()` to debug

## Try This
Fix: `for i in range(5)` (missing `:`)

You did it! ⭐
