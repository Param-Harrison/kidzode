import json

bad_json = '{"name": "Bond", "agent": 007}'

try:
    data = json.loads(bad_json)
except json.JSONDecodeError:
    print("Oops! Bad JSON data!")
