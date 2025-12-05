import json

json_string = '{"user": "Param", "level": 5}'

data = json.loads(json_string)

print(data)
print(type(data))
