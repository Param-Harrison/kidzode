import io
data = "Line 1\nLine 2\nLine 3"
fake_file = io.StringIO(data)

for line in fake_file:
    print(line.strip())
