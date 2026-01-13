# ========================================
# 🎭 LESSON 3: The Mood Score
# ========================================

message = "I had a great day but I feel a bit sad"
message = message.lower()

# Count happy words
happy = message.count("happy") + message.count("great") + message.count("love")

# Count sad words
sad = message.count("sad") + message.count("bad") + message.count("angry")

# Calculate score
score = happy - sad

print("Message:", message)
print("Happy words:", happy)
print("Sad words:", sad)
print("Mood score:", score)

if score > 0:
    print("Overall mood: 😊 Happy!")
elif score < 0:
    print("Overall mood: 😢 Sad")
else:
    print("Overall mood: 😐 Neutral")

# ----------------------------------------
# 🎮 TRY THIS:
# Change the message and see the mood change!
# ----------------------------------------
