### One way to solve it:

```python
import random

adjectives = ["Super", "Power", "Mega", "Shadow", "Crystal"]
nouns = ["Tiger", "Phantom", "Bird", "Shield", "Blade"]

print("--- ASSEMBLING THE TEAM ---")

for i in range(3):
    adj = random.choice(adjectives)
    noun = random.choice(nouns)
    print(f"Hero {i+1}: {adj} {noun}")

print("---------------------------")
print("TEAM READY FOR ACTION!")
```
