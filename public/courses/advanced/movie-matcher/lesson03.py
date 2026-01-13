movies = [
    {"title": "Toy Story", "genre": "Animation", "rating": 8.3},
    {"title": "The Dark Knight", "genre": "Action", "rating": 9.0},
    {"title": "Finding Nemo", "genre": "Animation", "rating": 8.1}
]
best = movies[0]
for movie in movies:
    if movie["rating"] > best["rating"]:
        best = movie
print("Top recommendation:", best["title"], "(" + str(best["rating"]) + ")")
