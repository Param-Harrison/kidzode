import argparse
import sys

sys.argv = ["math.py", "5", "10"]

parser = argparse.ArgumentParser()
parser.add_argument("x", type=int)
parser.add_argument("y", type=int)

args = parser.parse_args()
print(f"Sum: {args.x + args.y}")
