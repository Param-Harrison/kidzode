# Hints for Secret Agent Challenge

## 🟢 Hint 1
Use an empty string to store the result:
```python
output = ""
```

## 🟡 Hint 2
To decode, just reverse the math:
```python
new_code = code - shift
```

## 🟠 Hint 3
You can check if the user wants to decode like this:
```python
choice = input("E or D? ")
if choice == "D":
    shift = -shift
```
*(Multiplying shift by -1 turns adding into subtracting!)*
