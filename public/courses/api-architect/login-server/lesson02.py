# ☁️ API ARCHITECT
# Goal: Verify Password

users = {"neo": "matrix"}

# The password user typed
login_attempt = "matrix"

# 1. Get real password
real_password = users["neo"]

# 2. Compare
if login_attempt == real_password:
    print("Welcome back, Mr. Anderson.")
else:
    print("Access Denied.")
