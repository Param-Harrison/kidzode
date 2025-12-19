# Pretty Printing

JSON strings can be hard to read.
We can "pretty print" them with `indent`!

```python
import json

hero = {
    "name": "Batman",
    "stats": {"strength": 100, "speed": 80}
}

# Indent with 4 spaces
pretty_json = json.dumps(hero, indent=4)

print(pretty_json)
```

You'll see:
```
{
    "name": "Batman",
    "stats": {
        "strength": 100,
        "speed": 80
    }
}
```

So meaningful! Much readable! 💅

## Try This!
Change `indent=4` to `indent=2`!
