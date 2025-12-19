import hashlib

def get_hash(password, salt):
    combo = salt + password
    return hashlib.sha256(combo.encode()).hexdigest()

h1 = get_hash("abc", "user1")
h2 = get_hash("abc", "user2")

print(f"User 1: {h1}")
print(f"User 2: {h2}")
# Different hashes for same password!
