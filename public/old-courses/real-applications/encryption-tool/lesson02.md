# Computers use Numbers

Computers don't know "A" or "B". They know numbers!
This is called **ASCII**.

- `ord("A")` -> 65
- `chr(65)` -> "A"

```python
char = "A"
code = ord(char)
print(f"A is {code}")

next_char = chr(code + 1)
print(f"Next is {next_char}")
```

You'll see: `A is 65`, `Next is B`.
We can do math on letters! 🧮

## Try This!
What is the number for "z"? What is `chr(97)`?
