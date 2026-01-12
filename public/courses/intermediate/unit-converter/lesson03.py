# ========================================
# 🌡️ LESSON 3: Temperature Pro
# ========================================

def celsius_to_fahrenheit(c):
    return c * 1.8 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) / 1.8

# Test with known values
print("Freezing point:")
print("0°C =", celsius_to_fahrenheit(0), "°F")

print("")
print("Boiling point:")
print("100°C =", celsius_to_fahrenheit(100), "°F")

print("")
print("Room temperature:")
print("68°F =", fahrenheit_to_celsius(68), "°C")

# ----------------------------------------
# 🎮 TRY THIS:
# Convert today's temperature!
# ----------------------------------------
