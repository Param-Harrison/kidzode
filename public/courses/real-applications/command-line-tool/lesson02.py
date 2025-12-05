import sys
sys.argv = ["program.py", "Alice"]

# Remember: Index 0 is the script name
# Index 1 is the first argument
name = sys.argv[1]

print(f"Hello, {name}!")
