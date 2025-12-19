### One way to solve it:

```python
temps = {
    "Rome": 22,
    "Paris": 19,
    "London": 15
}

total = 0
print("Analyzing data...")

for t in temps.values():
    total += t

avg = total / len(temps)
print("Average Temperature:", avg)
```
