def safe_parser(lines):
    for line in lines:
        try:
            parts = line.split(",")
            age = int(parts[1])
            yield {"name": parts[0], "age": age}
        except ValueError:
            print(f"Skipping bad line: {line}")

data = ["Alice,10", "Bob,Twenty", "Charlie,30"]
users = list(safe_parser(data))

print(users)
