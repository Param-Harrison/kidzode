# Hints

## 🟢 Hint 1
Check memory first: `if n in memory:`

## 🟡 Hint 2
If found, return it: `return memory[n]`

## 🟠 Hint 3
If not, calculate and save:
```python
result = func(n)
memory[n] = result
return result
```

## 🔴 Hint 4
All together inside wrapper:
```python
if n not in memory:
    memory[n] = func(n)
return memory[n]
```
