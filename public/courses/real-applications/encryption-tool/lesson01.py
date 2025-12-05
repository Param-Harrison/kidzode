message = "Hello World"
secret = message[::-1]

print(f"Cipher Text: {secret}")

# To decrypt, just reverse again!
print(f"Plain Text: {secret[::-1]}")
