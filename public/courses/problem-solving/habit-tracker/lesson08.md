# Weekly View

Let's see the whole week at a glance.

```python
week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
history = [True, True, False, True, True, False, True]

for i in range(7):
    day = week[i]
    done = history[i]
    
    if done:
        print(f"{day}: ✅")
    else:
        print(f"{day}: ❌")
```

You'll see:
```
Mon: ✅
Tue: ✅
Wed: ❌
...
```

A visual calendar!

## Try This!
Change Wednesday to `True` to fix your week!
