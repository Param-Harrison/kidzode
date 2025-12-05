import json

hero = {"name": "Batman", "power": 100}

json_string = json.dumps(hero)

print(json_string)
print(type(json_string))
