# 🎬 MOVIE MATCHER: CASE 006
# Goal: Find the BEST movies

movies = [
    {"title": "Bad Jokes", "genre": "Comedy", "rating": 2},
    {"title": "Super Laughs", "genre": "Comedy", "rating": 9},
    {"title": "Space Dull", "genre": "Sci-Fi", "rating": 4}
]

# 1. Ask for genre
want = input("Genre: ")

# 2. Loop and check TWO things
for m in movies:
    # Match genre AND high rating
    if m["genre"] == want and m["rating"] > 8:
        print("MUST WATCH:", m["title"])
