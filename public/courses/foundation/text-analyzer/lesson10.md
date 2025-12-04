# Clean Up Spaces

Sometimes text has extra spaces. " Hello " is annoying!

Use `.strip()` to clean it up.

```python
messy = "   Hello   "
clean = messy.strip()

print(f"'{clean}'")
```

You'll see:
```
'Hello'
```

No more spaces on the sides!

**How it works:** It removes whitespace from the START and END.

## Try This!
Clean up "   Python   "!
