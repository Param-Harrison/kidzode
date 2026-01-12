# ========================================
# 🔴 LESSON 2: Live Time
# ========================================

import time
from datetime import datetime

print("Starting live clock... (press Stop to exit)")
print("")

# Loop forever, updating every second
while True:
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    print("Time:", current_time)
    time.sleep(1)  # Wait 1 second

# ----------------------------------------
# 🎮 TRY THIS:
# Change time.sleep(1) to time.sleep(0.5)
# for faster updates!
# ----------------------------------------
