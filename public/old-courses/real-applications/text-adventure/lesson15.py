import json

# Mock state
state = {
    "level": 5,
    "score": 9000
}

# Save
json_str = json.dumps(state)
print(f"Saved: {json_str}")

# Load
loaded = json.loads(json_str)
print(f"Loaded Level: {loaded['level']}")
