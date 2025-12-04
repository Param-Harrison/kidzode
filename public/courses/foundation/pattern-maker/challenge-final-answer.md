# Solution

```python
height = 5

for i in range(height):
    # Calculate spaces (get smaller)
    spaces = " " * (height - i - 1)
    
    # Calculate stars (get bigger: 1, 3, 5...)
    stars = "*" * (2 * i + 1)
    
    print(spaces + stars)
```

Output:
```
    *
   ***
  *****
 *******
*********
```

You built a pyramid! You're a pattern master! 🏗️
