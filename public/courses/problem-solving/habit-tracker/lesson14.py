percent = 70
# 70% means 7 blocks out of 10
blocks = int(percent / 10) 

bar = "█" * blocks
empty = "░" * (10 - blocks)

print(f"Progress: {bar}{empty} {percent}%")
