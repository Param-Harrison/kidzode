# Combine Methods

You can chain methods together!

```python
text = "   WoW   "
clean = text.strip().lower()

print(clean)
```

You'll see:
```
wow
```

It stripped spaces AND made it lowercase in one line!

**How it works:**
1. `.strip()` runs first -> "WoW"
2. `.lower()` runs next -> "wow"

## Try This!
Chain `.strip().upper()` on "   cool   "!
