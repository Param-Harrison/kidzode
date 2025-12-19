### One way to solve it:

```python
word = input("Enter a secret word: ")

print("--- CONVERTING TO NUMBERS ---")

for letter in word:
    code = ord(letter)
    print(letter, "->", code)
```
