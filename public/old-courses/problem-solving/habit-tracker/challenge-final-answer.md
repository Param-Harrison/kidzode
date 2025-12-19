# Solution

```python
history = [True, False, True, True, True]

# 1. Streak
streak = 0
for day in reversed(history):
    if day:
        streak += 1
    else:
        break

# 2. Rate
rate = (sum(history) / len(history)) * 100

# 3. Bar
blocks = int(rate / 10)
bar = "█" * blocks + "░" * (10 - blocks)

print("--- HABIT REPORT ---")
print(f"Streak: {streak} days")
print(f"Rate: {rate}%")
print(f"Progress: {bar}")
```

Output:
```
--- HABIT REPORT ---
Streak: 3 days
Rate: 80.0%
Progress: ████████░░
```

You are a Habit Master! 🧘
