# ========================================
# 📅 LESSON 3: The Date Display
# ========================================

from datetime import datetime

now = datetime.now()

# Time display
time_string = now.strftime("%H:%M:%S")
print("Time:", time_string)

# Date display - different formats
print("")
print("Date (numbers):", now.strftime("%Y-%m-%d"))
print("Date (words):", now.strftime("%A, %B %d, %Y"))

# ----------------------------------------
# 🎮 TRY THIS:
# Create your own custom format!
# ----------------------------------------
