# Looping JSON Data

Since it's a list, we can loop through it!

```python
import json

team_json = '''
{
    "team": "Avengers",
    "members": ["Iron Man", "Thor", "Hulk"]
}
'''
data = json.loads(team_json)

print(f"Team: {data['team']}")

for hero in data['members']:
    print(f"- {hero}")
```

You'll see:
```
Team: Avengers
- Iron Man
- Thor
- Hulk
```

We just processed raw data! 🛡️

## Try This!
Add "Spiderman" to the list in the JSON string!
