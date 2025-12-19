### One way to solve it:

```python
import random

adjectives = ["Mega", "Sonic", "Quantum"]
nouns = ["Falcon", "Storm", "Pulse"]
titles = ["Guardian", "Defender", "Titan"]

adj = random.choice(adjectives)
noun = random.choice(nouns)
title = random.choice(titles)

print(f"Your full identity is: {adj} {noun} {title}")
```
