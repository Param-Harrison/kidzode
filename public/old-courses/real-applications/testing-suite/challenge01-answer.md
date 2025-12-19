# Solution

```python
def is_even(n):
    return n % 2 == 0

def test_is_even():
    assert is_even(2) == True, "2 is even"
    assert is_even(3) == False, "3 is odd"
    print("Mischief managed! (Tests passed)")

test_is_even()
```

Output:
```
Mischief managed! (Tests passed)
```
