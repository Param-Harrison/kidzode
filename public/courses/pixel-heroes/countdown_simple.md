# Rocket Countdown

3... 2... 1... BLAST OFF! Make a rocket countdown! Press Run and watch it count down.

```python
# Countdown from 10 to 1
for number in range(10, 0, -1):
    print(number)

print("BLAST OFF!")
```

**How it works:** `range(10, 0, -1)` counts from 10 down to 1. The `-1` means count backwards by 1 each time. It stops at 1 (not 0) - that's why we use `0` as the stop point!

Try `range(5, 0, -1)` for a faster countdown, or `range(20, 0, -1)` for a longer one!
