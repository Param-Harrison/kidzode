import hashlib

stored_hash = hashlib.sha256("admin".encode()).hexdigest()

def check(password):
    h = hashlib.sha256(password.encode()).hexdigest()
    if h == stored_hash:
        return True
    return False

print(f"Checking 'guest': {check('guest')}")
print(f"Checking 'admin': {check('admin')}")
