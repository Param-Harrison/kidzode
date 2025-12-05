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

# One step
print(f"Speed: {data['stats']['speed']}")
