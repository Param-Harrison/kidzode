# Scaling Data

What if the number is 1000? That's too many stars!
We need to **scale** it down.

If max width is 10, and value is 100:
`scaled = (value / 100) * 10`

```python
value = 50
max_val = 100
width = 10

scaled = int((value / max_val) * width)
print(f"Scaled: {scaled}")
```

You'll see:
```
Scaled: 5
```

Now it fits on the screen!

## Try This!
Scale 75 to fit in a width of 20!
