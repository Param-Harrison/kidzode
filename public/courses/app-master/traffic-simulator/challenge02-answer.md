### One way to solve it:

```python
def tick(self):
    self.timer -= 1
    if self.timer == 0:
        self.timer = 3
        if self.color == "G": self.color = "R"
        else: self.color = "G"
```
