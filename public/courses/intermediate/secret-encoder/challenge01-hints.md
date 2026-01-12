# Hints for Challenge 1: Secret Agent Encoder 💡

## Stuck? Here are some hints!

### Hint 1: Get input
```python
message = input("Enter your secret message: ")
shift = int(input("Enter the shift number: "))
```

### Hint 2: Loop through letters
```python
for letter in message:
```

### Hint 3: Shift and add
```python
new_code = ord(letter) + shift
secret = secret + chr(new_code)
```

You're a secret agent now! 🕵️
