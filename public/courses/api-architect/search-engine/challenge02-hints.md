# Hints for Word Counter

## 🟢 Hint 1
Check existence first:
```python
if word in counts:
```

## 🟡 Hint 2
Increment logic:
```python
counts[word] = counts[word] + 1
```

## 🟠 Hint 3
New word logic:
```python
else:
    counts[word] = 1
```
