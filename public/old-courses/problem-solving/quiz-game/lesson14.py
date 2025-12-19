quiz_data = {
    "math": [{"q": "1+1", "a": "2"}],
    "science": [{"q": "H2O is?", "a": "Water"}]
}

category = "math" # Change this!

print(f"Playing {category} quiz!")
for q in quiz_data[category]:
    print(q["q"])
