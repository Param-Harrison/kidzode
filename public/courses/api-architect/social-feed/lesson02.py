# ☁️ API ARCHITECT
# Goal: Show Viral Posts

posts = [
  {"text": "Boring...", "likes": 2},
  {"text": "Super viral!", "likes": 5000}
]

print("--- VIRAL ZONE ---")
# 1. Loop and check likes
for p in posts:
    if p["likes"] > 100:
        print(p["text"])
