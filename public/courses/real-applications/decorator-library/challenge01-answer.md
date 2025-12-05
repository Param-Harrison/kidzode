# Solution

```python
def power_maker(n):
    def power(x):
        return x ** n
    return power

square_it = power_maker(2)
cube_it = power_maker(3)

print(square_it(4)) # 16
print(cube_it(2))   # 8
```

Output:
```
16
8
```
