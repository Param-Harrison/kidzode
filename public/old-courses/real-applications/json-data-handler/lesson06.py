import json

json_string = '{"user": "Param", "level": 5}'
data = json.loads(json_string)

print(f"User: {data['user']}")
print(f"Level: {data['level']}")
