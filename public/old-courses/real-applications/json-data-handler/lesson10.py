import json

team_json = '''
{
    "team": "Avengers",
    "members": ["Iron Man", "Thor", "Hulk"]
}
'''
data = json.loads(team_json)

print(f"Team: {data['team']}")

for hero in data['members']:
    print(f"- {hero}")
