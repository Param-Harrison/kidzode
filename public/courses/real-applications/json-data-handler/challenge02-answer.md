# Solution

```python
import json

data_string = '{"users": ["Mario", "Luigi", "Toad"]}'

data = json.loads(data_string)

for player in data['users']:
    print(f"Player: {player}")
```

Output:
```
Player: Mario
Player: Luigi
Player: Toad
```
