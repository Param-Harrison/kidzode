# Count with Loops

Loops can count numbers too! Press Run and watch Python count up to 10, then count back down to 1.

```python
# Count from 1 to 10
print("Counting up:")
for number in range(1, 11):
    print(number)

# Count from 10 down to 1
print("Counting down:")
for number in range(10, 0, -1):
    print(number)

print("BLAST OFF!")
```

**How it works:** `range(1, 11)` counts from 1 to 10 (it stops before 11!). `range(10, 0, -1)` counts backwards - the `-1` means go down by 1 each time. You can use the `number` variable inside the loop!

Try counting by 2s: `range(0, 11, 2)` - now it counts 0, 2, 4, 6, 8, 10!
