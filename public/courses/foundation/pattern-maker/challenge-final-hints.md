# Hints

## 🟢 Hint 1
You need a loop for the rows: `for i in range(5):`

## 🟡 Hint 2
Calculate spaces: `spaces = " " * (4 - i)`

## 🟠 Hint 3
Calculate stars: `stars = "*" * (2 * i + 1)` (Odd numbers: 1, 3, 5...)

## 🔴 Hint 4
```python
for i in range(5):
    spaces = " " * (4 - i)
    stars = "*" * (2 * i + 1)
    print(spaces + stars)
```
