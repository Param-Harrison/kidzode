import sys

# We manually set this to simulate a command line run
# In a real terminal, Python does this for you!
sys.argv = ["program.py", "Hello", "World"]

print(f"All arguments: {sys.argv}")
