# Visual Progress

Numbers are boring. Let's draw a bar!

```python
percent = 70
# 70% means 7 blocks out of 10
blocks = int(percent / 10) 

bar = "█" * blocks
empty = "░" * (10 - blocks)

print(f"Progress: {bar}{empty} {percent}%")
```

You'll see:
```
Progress: ███████░░░ 70%
```

Looks like a video game loading screen!

## Try This!
Change `percent` to 100 to see a full bar!
