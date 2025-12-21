# 🎬 MOVIE MATCHER
# Goal: Search by Genre

movies = [
    {"title": "Funny Dog", "genre": "Comedy"},
    {"title": "Space Ship", "genre": "Sci-Fi"},
    {"title": "Laughing Cow", "genre": "Comedy"}
]

# 1. Ask user for genre
want = input("What genre do you like? ")

# 2. Loop and search
print(f"Searching for {want}...")
for m in movies:
    if m["genre"] == want:
        print("Found:", m["title"])
