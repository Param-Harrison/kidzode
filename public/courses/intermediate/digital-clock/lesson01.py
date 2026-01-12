# ========================================
# ⏰ LESSON 1: The Perfect Format
# ========================================

from datetime import datetime

# Get the current time
now = datetime.now()

# Show individual parts
print("Hour:", now.hour)
print("Minute:", now.minute)
print("Second:", now.second)

# Format it nicely like a clock
time_string = now.strftime("%H:%M:%S")
print("")
print("Current time:", time_string)

# ----------------------------------------
# 🎮 TRY THIS:
# Run it again after a few seconds!
# ----------------------------------------
