# Secrets and Spies 🕵️‍♀️

**Encryption** is the art of hiding messages.
We take "Plain Text" and turn it into "Cipher Text" (gibberish).

Only someone with the **Key** can read it! 🔑

```python
# A simple "Reverse" Cipher
message = "Hello World"
secret = message[::-1] # Reverse it

print(f"Secret: {secret}")

# Decrypt
original = secret[::-1]
print(f"Original: {original}")
```

You'll see: `Secret: dlroW olleH`.
It's a weak secret, but it's a start!

## Try This!
Encrypt "Python is safe" using the Reverse Cipher.
