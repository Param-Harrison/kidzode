### One way to solve it:

```python
# Matches "Secret"
secret_nums = [83, 101, 99, 114, 101, 116]

print("Decoding message...")

for n in secret_nums:
    # Convert number to letter
    char = chr(n)
    print(char, end="")

print("\n\nMission Complete.")
```
