def make_fancy(text):
    clean = text.strip()
    fancy = clean.title()
    return f"✨ {fancy} ✨"

print(make_fancy("  hello world  "))
