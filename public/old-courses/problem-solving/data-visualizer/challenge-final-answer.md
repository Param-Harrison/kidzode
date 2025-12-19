# Solution

```python
sales = [50, 20, 80, 40]

total = sum(sales)
avg = total / len(sales)
best = max(sales)

print(f"Total: {total}")
print(f"Average: {avg}")
print(f"Best: {best}")
print("\nChart:")

for s in sales:
    # Scale to width 20
    length = int((s / best) * 20)
    bar = "█" * length
    print(f"{s}: {bar}")
```

Output:
```
Total: 190
Average: 47.5
Best: 80

Chart:
50: ████████████
20: █████
80: ████████████████████
40: ██████████
```

You are a business analyst! 📈
