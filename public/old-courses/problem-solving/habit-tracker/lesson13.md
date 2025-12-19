# Habit Stats

Let's summarize everything!

```python
habit = "Read"
history = [True, False, True, True]

total = len(history)
done = sum(history)
rate = (done / total) * 100

print(f"Habit: {habit}")
print(f"Total Days: {total}")
print(f"Completed: {done}")
print(f"Success Rate: {rate}%")
```

You'll see:
```
Habit: Read
Total Days: 4
Completed: 3
Success Rate: 75.0%
```

Data is power!

## Try This!
Create a function `print_stats(habit_name, history)`!
