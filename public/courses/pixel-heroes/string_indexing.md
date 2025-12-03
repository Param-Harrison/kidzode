# Get Letters from Words

Want to grab individual letters from words? You can! Press Run to see how.

```python
word = "PYTHON"

# Get letters by position
print(f"First letter: {word[0]}")
print(f"Second letter: {word[1]}")
print(f"Last letter: {word[5]}")

# Make initials
first_name = "Rose"
last_name = "Smith"
initials = first_name[0] + last_name[0]
print(f"Initials: {initials}")
```

**Important:** Letters start at 0, not 1! So `word[0]` is the first letter, `word[1]` is the second letter, and so on.

Try getting letters from your own name - change `"PYTHON"` to your name and see what happens!
