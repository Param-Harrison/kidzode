### One way to solve it:

```python
class H:
    def __init__(self, n): self.n = n
    def __str__(self): return self.n

p = []
p.append(H("One"))
p.append(H("Two"))

for x in p:
    print(x)
```
