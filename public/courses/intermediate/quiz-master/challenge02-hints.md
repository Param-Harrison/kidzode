# Hints for Hint System

## 🟢 Hint 1
Use a `while` loop so you can ask again if they pick hint:
```python
while True:
    ans = input(...)
```

## 🟡 Hint 2
Check if they want a hint:
```python
if ans == "HINT":
    print(q["hint"])
```

## 🟠 Hint 3
Break the loop when they get it right!
