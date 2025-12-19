# Compare Data

Who is winning?
Let's compare two lists side-by-side.

```python
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
```

You'll see:
```
Round 1: Team B Wins!
Round 2: Team A Wins!
...
```

Head-to-head battle!

## Try This!
Compare your test scores with a friend's!
