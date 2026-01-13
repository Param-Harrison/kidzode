labels = ["Mon", "Tue", "Wed", "Thu", "Fri"]
values = [5, 8, 3, 10, 6]

print("=" * 25)
print("   📊 DAILY STEPS")
print("=" * 25)
for i in range(len(labels)):
    bar = "█" * values[i]
    print(labels[i] + ":", bar, values[i])
print("=" * 25)
print("Max:", max(values))
print("Total:", sum(values))
print("Avg:", sum(values) / len(values))
