# State Machines 🚦

A Traffic Light changes state.
Red -> Green -> Red.
We can Model this!

### The Logic
```python
def change(self):
    if self.color == "Red":
        self.color = "Green"
    else:
        self.color = "Red"
```

### Your Goal
1. Define `Light` with `color="Red"`.
2. Add `change_color(self)`.
3. Create light. Print Color. Change Color. Print Color.

### Achievement
🚦 **Engineer**: You controlled the flow of traffic!
