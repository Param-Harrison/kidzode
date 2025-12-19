# Deep Dive

How do we get the **strength**? We dig deep! ⛏️

```python
import json

complex_json = '''
{
    "hero": "Batman",
    "stats": {
        "strength": 100,
        "speed": 80
    }
}
'''
data = json.loads(complex_json)

# Get the stats dictionary first
stats = data['stats']
print(f"Strength: {stats['strength']}")

# OR do it in one step!
print(f"Speed: {data['stats']['speed']}")
```

You'll see:
```
Strength: 100
Speed: 80
```

Double brackets `[][]` mean "go inside, then go inside again"!

## Try This!
Print the hero name and speed in one sentence!
