### One way to solve it:

```python
import random

activities = ["Hiking", "Pizza Party", "Movie Marathon", "Gaming", "Swimming"]

print("--- ADVENTURE GENERATOR ---")
input("Press ENTER to find your destiny...")

pick = random.choice(activities)
print("The universe has spoken! You should go for:", pick)
```
