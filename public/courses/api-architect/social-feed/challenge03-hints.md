# Hints for Trending Now

## 🟢 Hint 1
Track the 'best so far':
```python
top_score = 0
```

## 🟡 Hint 2
Compare every item:
```python
if post["likes"] > top_score:
    top_score = post["likes"]
    top_text = post["txt"]
```

## 🟠 Hint 3
This is the classic "Find Maximum" algorithm.
