import base64

msg = "Hello World"
encoded = base64.b64encode(msg.encode())

print(f"Encoded: {encoded}")

# Anyone can decode this instantly!
decoded = base64.b64decode(encoded).decode()
print(f"Decoded: {decoded}")
