rooms = {
    "hall": {
        "exits": {"north": "kitchen"}
    },
    "kitchen": {
        "exits": {"south": "hall"}
    }
}

current = "hall"
# Simulate moving north
next_room = rooms[current]["exits"]["north"]
print(f"Moving to: {next_room}")
