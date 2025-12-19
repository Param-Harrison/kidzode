### One way to solve it:

```python
print("--- WORD COUNTER ---")
data = input("Enter text: ")

# A simple heuristic (rule of thumb)
num_spaces = data.count(" ")
num_words = num_spaces + 1

print("Approximate Words:", num_words)
```
