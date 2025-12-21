# ☁️ API ARCHITECT
# Goal: Auto-Index

index = {}
page_id = "homepage"
phrase = "welcome to the web"

# 1. Split
tokens = phrase.split(" ")

# 2. Loop and Add
for t in tokens:
    index[t] = page_id

print("Built Index:", index)
