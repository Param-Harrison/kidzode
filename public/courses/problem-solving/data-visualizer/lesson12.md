# Percentages

What part of the whole is this?
Formula: `(part / total) * 100`

```python
votes = [10, 30, 10]
total_votes = sum(votes)

for v in votes:
    percent = (v / total_votes) * 100
    print(f"{v} votes is {percent}%")
```

You'll see:
```
10 votes is 20.0%
30 votes is 60.0%
...
```

Pie charts use percentages!

## Try This!
Calculate percentage of boys and girls in your class!
