# Understanding range()

Typing `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` is annoying. Use `range()` instead!

`range()` creates numbers automatically! Just tell it where to start and stop.

```python
for number in range(1, 11):
    print(number)
```

**Why 11?** `range()` stops BEFORE the last number!

You'll see:
```
1
2
3
4
5
6
7
8
9
10
```

Counted to 10 with one simple range! No more typing long lists!

**How it works:** `range(1, 11)` = numbers from 1 to 10 (stops before 11)

## Try This!
- `range(1, 6)` - counts 1 to 5
- `range(1, 101)` - counts to 100!
