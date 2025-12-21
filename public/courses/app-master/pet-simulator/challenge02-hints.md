# Hints for Sleepy Pet

## 🟢 Hint 1
Logic:
```python
self.energy += 50
```

## 🟡 Hint 2
Capping:
```python
if self.energy > 100:
    self.energy = 100
```

## 🟠 Hint 3
Start with 80 energy to prove the logic works (80+50 = 130, should clamp to 100).
