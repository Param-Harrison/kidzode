# Reading Files: The Trap 🪤

Normally we do:
```python
with open("data.txt") as f:
    lines = f.readlines() # ❌ LOADS EVERYTHING!
    for line in lines:
        print(line)
```

If "data.txt" is 50GB, your computer crashes. 🔥
We need to read **line by line**.

## Try This!
(Just imagine) What happens if you try to memorize a whole book at once?
