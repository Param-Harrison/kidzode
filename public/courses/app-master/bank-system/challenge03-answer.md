### One way to solve it:

```python
class Bank:
    def __init__(self):
        self.history = []
    
    def save(self, msg):
        self.history.append(msg)

b = Bank()
b.save("Test")
print(b.history)
```
