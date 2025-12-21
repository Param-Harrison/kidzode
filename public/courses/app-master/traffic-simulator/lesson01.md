## Welcome to Traffic Simulator! 🚦
Honk honk! Let's learn how smart cities manage their busy streets by building a simulator that controls the flow of traffic!

# State Machines 🚦

Objects change their behavior based on "State".
A Traffic Light is a **State Machine**.
States: "Red" -> "Green" -> "Yellow" -> "Red".

### The Code
```python
class Light:
    state = "Red"
    
    def change(self):
        if self.state == "Red":
            self.state = "Green"
        elif self.state == "Green":
            self.state = "Yellow"
```

### Your Goal
1. Define `Switch` with `state = "Off"`.
2. `toggle()`: If Off, become On. If On, become Off.
3. Call toggle 3 times and print state each time.

### Practical Use
Video game characters have states too: `Idle`, `Run`, `Jump`, `Dead`.
