import argparse
import sys

sys.argv = ["app.py", "--fast"]

parser = argparse.ArgumentParser()
parser.add_argument("--fast", action="store_true")

args = parser.parse_args()

if args.fast:
    print("Turbo Mode Activated! 🚀")
