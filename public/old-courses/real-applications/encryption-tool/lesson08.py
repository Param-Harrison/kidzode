import hashlib

secret = "MySecretPassword"
# Convert string to bytes
bytes_data = secret.encode()

# Hash it
my_hash = hashlib.sha256(bytes_data).hexdigest()

print(f"Hash: {my_hash}")
