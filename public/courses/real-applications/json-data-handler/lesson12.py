import json

hero = {
    "name": "Batman",
    "stats": {"strength": 100, "speed": 80}
}

pretty_json = json.dumps(hero, indent=4)

print(pretty_json)
