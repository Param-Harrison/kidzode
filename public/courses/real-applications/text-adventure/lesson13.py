import random

def attack():
    dmg = random.randint(1, 10)
    
    # Critical Chance (20%)
    if random.random() < 0.2:
        print("CRITICAL HIT!")
        dmg *= 2
        
    return dmg

print(f"You dealt {attack()} damage.")
