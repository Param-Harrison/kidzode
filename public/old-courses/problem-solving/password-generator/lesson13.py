def check_strength(password):
    if len(password) < 8:
        print("Weak 🔴")
    else:
        print("Strong 🟢")

check_strength("12345")
check_strength("supersecret123")
