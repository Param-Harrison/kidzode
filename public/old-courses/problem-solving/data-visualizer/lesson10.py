data = [100, 50, 75]
max_val = max(data)
width = 20

for n in data:
    length = int((n / max_val) * width)
    bar = "█" * length
    print(f"{n}: {bar}")
