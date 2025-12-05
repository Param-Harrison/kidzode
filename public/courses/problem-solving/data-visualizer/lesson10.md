# Scaled Bar Chart

Let's draw big numbers!

```python
data = [100, 50, 75]
max_val = max(data)
width = 20

for n in data:
    length = int((n / max_val) * width)
    bar = "█" * length
    print(f"{n}: {bar}")
```

You'll see:
```
100: ████████████████████
50: ██████████
75: ███████████████
```

Professional charts!

## Try This!
Change `width` to 10 to make it smaller!
