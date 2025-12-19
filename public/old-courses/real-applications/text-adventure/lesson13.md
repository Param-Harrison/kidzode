# Rolling the Dice 🎲

Games are boring if they are predictable.
Use `random` to make damage variable.

```python
import random

damage = random.randint(5, 15) # 5 to 15 damage
print(f"Critical Hit! {damage} damage!")
```

Maybe the monster misses sometimes?
`if random.random() < 0.2: print("Missed!")`

## Try This!
Make a "Magic Sword" that has a 10% chance to do double damage.
