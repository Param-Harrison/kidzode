# 😃 EMOJI ANALYZER
# Goal: Analyze the mood

message = "I am sad today 😢 but tomorrow will be better 😄"

# 1. Count happy and sad
happy = message.count("😄")
sad = message.count("😢")

# 2. Compare the data
print("--- MOOD REPORT ---")
if happy > sad:
    print("Result: POSITIVE VIBE")
elif sad > happy:
    print("Result: NEGATIVE VIBE")
else:
    print("Result: NEUTRAL")
