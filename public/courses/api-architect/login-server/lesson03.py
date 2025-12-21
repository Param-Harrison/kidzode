# ☁️ API ARCHITECT
# Goal: Safe Login Flow

db = {"admin": "root"}
username = "hacker"

# 1. Check if user exists first
if username in db:
    print("User found! Checking password...")
    # Then check password
else:
    print("Error: User", username, "does not exist.")
