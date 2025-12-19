# Hints for Sentiment Analyzer

## 🟢 Hint 1
Use `input()` to get the data.

## 🟡 Hint 2
Count them:
```python
h = text.count(":)")
s = text.count(":(")
```

## 🟠 Hint 3
The logic:
```python
if h > s:
    # good
elif s > h:
    # bad
else:
    # neutral
```
