def csv_parser(lines):
    for line in lines:
        if not line.strip(): continue
        
        parts = line.strip().split(",")
        name = parts[0]
        age = int(parts[1])
        
        yield {"name": name, "age": age}

raw_data = ["Alice,10", "Bob,20", "Charlie,30"]
users = csv_parser(raw_data)

print(list(users))
