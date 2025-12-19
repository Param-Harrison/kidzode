import random
import string

def generate_password():
    chars = string.ascii_letters + string.digits
    password = ""
    for i in range(8):
        password = password + random.choice(chars)
    print(password)

generate_password()
generate_password()
