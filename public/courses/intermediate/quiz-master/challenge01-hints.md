# Hints for Quiz Master Challenge

## 🟢 Hint 1
Inside your loop, use another loop to show the options:
```python
for opt in item["options"]:
    print(opt)
```

## 🟡 Hint 2
Compare the user's input to `item["a"]`.

## 🟠 Hint 3
To track wrong answers, you can do:
```python
wrong = total - correct
```
or just create a `wrong_count = 0` variable and add to it in the `else` block.
