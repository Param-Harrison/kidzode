week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
history = [True, True, False, True, True, False, True]

for i in range(7):
    day = week[i]
    done = history[i]
    
    if done:
        print(f"{day}: ✅")
    else:
        print(f"{day}: ❌")
