import random

adjectives = ["Mega", "Sonic", "Quantum", "Shadow"]
nouns = ["Falcon", "Storm", "Pulse", "Knight"]

adjective = random.choice(adjectives)
noun = random.choice(nouns)

# Use an f-string to combine them
super_name = f"{adjective} {noun}"

print("Your superhero name is:")
print(super_name)

# TRY THIS: Change the f-string to add something like "Super" at the beginning!
# f"Super {adjective} {noun}"
