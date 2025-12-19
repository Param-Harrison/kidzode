# Hints for Forecast Analyzer

## 🟢 Hint 1
Initialize `highest` to a low number (like 0).

## 🟡 Hint 2
Inside loop:
```python
if day["t"] > highest:
    highest = day["t"]
    day_name = day["name"]
```

## 🟠 Hint 3
Print variables after the loop finishes.
