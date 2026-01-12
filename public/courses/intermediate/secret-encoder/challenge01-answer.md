# Answer: Secret Agent Encoder ✅

```python
message = input("Enter your secret message: ")
shift = int(input("Enter the shift number: "))

secret = ""
for letter in message:
    code = ord(letter)
    new_code = code + shift
    new_letter = chr(new_code)
    secret = secret + new_letter

print("Your secret message is:", secret)
```
