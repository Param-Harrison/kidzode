# ========================================
# ⏱️ CHALLENGE 2: Slow Motion Timer
# ========================================

# Step 1: Open the time toolbox
import time

# Step 2: Count down from 5 to 1
for number in range(5, 0, -1):
    print(number)
    # Step 3: Wait 1 second
    time.sleep(1)

# Step 4: Announce finished!
print("Time's up!")
