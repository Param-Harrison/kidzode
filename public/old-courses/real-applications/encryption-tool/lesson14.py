# DO NOT RUN ON IMPORTANT FILES!
# Creates a fake file to test
with open("test.txt", "w") as f:
    f.write("Hello")

def encrypt_file(filename):
    with open(filename, "rb") as f:
        data = f.read()
    
    # Simple +1 shift
    encrypted_data = bytes([(b + 1) % 256 for b in data])
    
    with open(filename + ".enc", "wb") as f:
        f.write(encrypted_data)
    print(f"Encrypted {filename} -> {filename}.enc")

encrypt_file("test.txt")
