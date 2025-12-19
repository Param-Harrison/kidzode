team_a = [10, 20, 30]
team_b = [15, 15, 35]

for i in range(len(team_a)):
    score_a = team_a[i]
    score_b = team_b[i]
    
    if score_a > score_b:
        print(f"Round {i+1}: Team A Wins!")
    elif score_b > score_a:
        print(f"Round {i+1}: Team B Wins!")
    else:
        print(f"Round {i+1}: Tie!")
