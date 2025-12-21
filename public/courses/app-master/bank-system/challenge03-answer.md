### Solution

```python
class System:
    def __init__(self):
        self.history = []
    
    def log(self, msg):
        self.history.append(msg)

sys = System()
sys.log("User Login")
sys.log("Payment Failed")

print(sys.history)
```
