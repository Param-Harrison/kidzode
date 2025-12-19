# ☁️ API ARCHITECT: CASE 003
# Goal: Sending Responses

msg = "status"

# 1. Check message content
if msg == "status":
    response = "All systems go! 🟢"
else:
    response = "Unknown command 🔴"

# 2. Send response
print("Server says:", response)
