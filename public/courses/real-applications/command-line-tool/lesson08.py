args = ["app.py", "--verbose", "data.csv"]

if "--verbose" in args:
    args.remove("--verbose")
    print("Verbose On")

print(f"Remaining args: {args}")
print(f"Filename: {args[1]}")
