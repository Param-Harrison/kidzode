import json

data = {"c": 3, "a": 1, "b": 2}

sorted_json = json.dumps(data, sort_keys=True)

print(sorted_json)
