import random

key = random.randint(1, 100)

with open("secret.key", "w") as f:
    f.write(str(key))

# Read it back
with open("secret.key", "r") as f:
    loaded_key = int(f.read())

print(f"Saved: {key}, Loaded: {loaded_key}")
