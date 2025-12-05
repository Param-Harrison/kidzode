import sys
sys.argv = ["program.py"] # Try adding "Param" here

if len(sys.argv) < 2:
    print("Error: You forgot to type your name!")
    print("Usage: python program.py <NAME>")
else:
    print(f"Hello, {sys.argv[1]}")
