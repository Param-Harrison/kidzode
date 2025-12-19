grid = [
    [".", ".", "."],
    [".", "P", "."],
    [".", ".", "."]
]

def draw():
    for row in grid:
        print(" ".join(row))

print("Center:")
draw()
