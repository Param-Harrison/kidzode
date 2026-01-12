# ========================================
# ⏳ LESSON 3: Wait for It...
# ========================================

# Open the time toolbox
import time

# Countdown from 5 to 1
for number in range(5, 0, -1):
    print(number)
    # Wait for 1 second before the next number
    time.sleep(1)

print("BLAST OFF!!! 🚀🚀🚀")

# ----------------------------------------
# 🎮 TRY THIS:
# Change time.sleep(1) to time.sleep(0.5)
# for a faster countdown!
# ----------------------------------------
