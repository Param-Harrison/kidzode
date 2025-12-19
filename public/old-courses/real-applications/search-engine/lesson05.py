stop_words = ["is", "and", "the", "a", "to", "or", "not"]

text = "to be or not to be that is the question"
tokens = text.split()

filtered = [w for w in tokens if w not in stop_words]

print(f"Keywords: {filtered}")
