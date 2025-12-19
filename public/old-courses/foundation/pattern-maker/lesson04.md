# Square Pattern

One line is boring. Let's make a square!

We can use a **loop** to print the line many times.

```python
symbol = "#"
width = 5

for i in range(5):
    print(symbol * width)
```

You'll see:
```
#####
#####
#####
#####
#####
```

A solid block of hashtags!

**How it works:**
- `range(5)` runs the code 5 times.
- Each time, it prints a line of 5 hashtags.

## Try This!
Change the loop to `range(10)` to make a tall tower!
