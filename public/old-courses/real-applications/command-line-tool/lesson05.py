import sys
sys.argv = ["calc.py", "5", "10", "20"]

if len(sys.argv) < 4:
    print("Need 3 numbers!")
else:
    a = int(sys.argv[1])
    b = int(sys.argv[2])
    c = int(sys.argv[3])
    print(f"Total: {a + b + c}")
