# Hints

Create lists for different categories! Each category is a list of words: `animals = ["elephant", "giraffe", ...]`.

---

Ask the user which category they want: `category = input("Choose a category: ")`. Then use `if/elif/else` to check what they typed.

---

If they type "animals", pick from the animals list: `if category == "animals": secret_word = random.choice(animals)`. Do the same for other categories!

---

After picking the word, use `len(secret_word)` to tell them how many letters it has. Then show the blanks and let them guess!

