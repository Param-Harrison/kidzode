movies = [
    {"title": "Toy Story", "genre": "Animation", "rating": 8.3},
    {"title": "The Dark Knight", "genre": "Action", "rating": 9.0},
    {"title": "Finding Nemo", "genre": "Animation", "rating": 8.1}
]
genre = input("What genre? ")
print("Movies in", genre + ":")
for movie in movies:
    if movie["genre"] == genre:
        print("-", movie["title"])
