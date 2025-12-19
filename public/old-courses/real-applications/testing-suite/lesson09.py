def get_colors():
    return ["Red", "Blue"]

colors = get_colors()

assert len(colors) == 2, "Should be 2 colors"
assert "Red" in colors, "Missing Red"
assert "Green" not in colors, "Green shouldn't be here"

print("Colors Valid! 🎨")
