import sys
sys.argv = ["math.py", "10"]

try:
    num = int(sys.argv[1])
    print(f"Double is: {num * 2}")
except ValueError:
    print("Error: Please provide a valid number!")
except IndexError:
    print("Error: Provide a number.")
