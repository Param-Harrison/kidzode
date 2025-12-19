turn = "Player"

while True:
    if turn == "Player":
        print("Your turn! Attack!")
        turn = "Enemy" # Switch turn
    else:
        print("Enemy attacks you!")
        turn = "Player" # Switch back
    
    # Stop for now so it doesn't run forever
    break 
