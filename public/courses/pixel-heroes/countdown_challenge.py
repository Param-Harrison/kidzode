print("=== CUSTOM ROCKET LAUNCH ===")
print()

# Ask user for starting number
start = input("Enter countdown start number (like 10 or 20): ")
start_number = int(start)

print()
print(f"Starting countdown from {start_number}!")
print("Engines starting... RUMBLE RUMBLE")
print()

# Countdown from user's number to 1
for number in range(start_number, 0, -1):
    print(f"T-minus {number}... BEEP!")

print()
print("BLAST OFF! WHOOOOSH!")
print("ROAR! The rocket is launching!")
print("Mission success!")
