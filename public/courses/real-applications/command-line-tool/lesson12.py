import argparse
import sys

# Fake inputs
sys.argv = ["app.py", "--age", "25"]

parser = argparse.ArgumentParser()
parser.add_argument("--age", type=int, help="Your age")

args = parser.parse_args()
print(f"You are {args.age} years old.")
