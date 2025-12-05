votes = [10, 30, 10]
total_votes = sum(votes)

for v in votes:
    percent = (v / total_votes) * 100
    print(f"{v} votes is {percent}%")
