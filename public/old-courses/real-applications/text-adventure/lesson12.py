# Simple Duel Simulation
player_hp = 20
monster_hp = 20

while player_hp > 0 and monster_hp > 0:
    print(f"You: {player_hp} | Enemy: {monster_hp}")
    
    # Player hits
    monster_hp -= 5
    print("You hit for 5!")
    
    if monster_hp <= 0: break
    
    # Monster hits
    player_hp -= 4
    print("Enemy hits for 4!")

print("Fight over!")
