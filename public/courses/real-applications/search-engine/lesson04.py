import string

text = "Hello, world! It's me."

# Removing punctuation
clean_text = text.translate(str.maketrans('', '', string.punctuation))

tokens = clean_text.lower().split()
print(tokens)
