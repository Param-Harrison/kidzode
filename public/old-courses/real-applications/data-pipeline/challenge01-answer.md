# Solution

```python
def my_range(start, end):
    current = start
    while current < end:
        yield current
        current += 1

# Test
for i in my_range(1, 4):
    print(i)
```

Output:
```
1
2
3
```
