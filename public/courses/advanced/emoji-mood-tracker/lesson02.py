# ========================================
# 😊 LESSON 2: Counting Feelings
# ========================================

message = "I had a great day! I feel happy and excited!"

# Convert to lowercase for easier matching
message = message.lower()

# Count happy words
happy_count = 0
happy_count = happy_count + message.count("happy")
happy_count = happy_count + message.count("great")
happy_count = happy_count + message.count("excited")
happy_count = happy_count + message.count("love")

print("Message:", message)
print("Happy words found:", happy_count)

# ----------------------------------------
# 🎮 TRY THIS:
# Change the message and see the count change!
# ----------------------------------------
