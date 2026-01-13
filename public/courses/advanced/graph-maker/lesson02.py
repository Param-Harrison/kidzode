labels = ["Mon", "Tue", "Wed", "Thu", "Fri"]
values = [5, 8, 3, 10, 6]

print("📊 Weekly Data:")
for i in range(len(labels)):
    bar = "█" * values[i]
    print(labels[i] + ":", bar, values[i])
