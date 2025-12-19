# ☁️ API ARCHITECT: CASE 003
# Goal: Keyword Detection

message = "Where can I buy a ticket?"

# 1. Check for "ticket"
if "ticket" in message:
    print("Opening Ticket Store...")
elif "cancel" in message:
    print("Cancelling order...")
else:
    print("Searching knowledge base...")
