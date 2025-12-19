# Lists in JSON

JSON can also hold Lists!

```python
import json

# A list of heroes
team_json = '''
{
    "team": "Avengers",
    "members": ["Iron Man", "Thor", "Hulk"]
}
'''

data = json.loads(team_json)

print(data['members'])
print(type(data['members']))
```

You'll see:
```
['Iron Man', 'Thor', 'Hulk']
<class 'list'>
```

It's a real Python List!

## Try This!
Print the first member using `[0]`!
