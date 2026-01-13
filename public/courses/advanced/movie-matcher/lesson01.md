# The Movie Vault 🎬

## Your Mission
Popcorn ready? 🍿 Deep inside the "Kidzode Stream" headquarters, we have a massive vault of every movie ever made. Your mission is to organize this vault so users can find exactly what they want to watch!

## The Recommendation Engine
A real movie database is just a big list of dictionaries. Each dictionary is like a DVD case with info on the front:

```python
movies = [
    {"title": "Spider-Bot", "genre": "Action", "rating": 9.2},
    {"title": "The Coding Cat", "genre": "Comedy", "rating": 8.5},
    {"title": "Space Pizza", "genre": "Sci-Fi", "rating": 7.0}
]
```

## Reading the Cases
To build a "Recommender," we need to loop through the vault and look at specific info:
```python
for movie in movies:
    print("Now showing:", movie["title"])
```

## Try It!
1. Look at the `movies` list on the right.
2. Click **Run** to see the list of titles.
3. **Challenge:** Add your own favorite movie to the vault! Make sure to give it a `title`, `genre`, and `rating`.

## What You Learned
✅ A **Movie Database** is a list of dictionaries.
✅ Each dictionary holds different types of data (Strings and Floats).
✅ This is the foundation of apps like Netflix and Disney+!

## Fun Fact
Netflix has over 15,000 movie records in its database. Luckily, Python can search all of them in less than a second! ⚡
