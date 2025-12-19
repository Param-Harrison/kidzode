import json

json_string = '{"score": 10}'
data = json.loads(json_string)

data['score'] = data['score'] + 5

new_json = json.dumps(data)

print(f"Old: {json_string}")
print(f"New: {new_json}")
