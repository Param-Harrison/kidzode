def highlight(text, query):
    # Simple replace
    return text.replace(query, f"**{query}**")

doc = "I like python programming"
print(highlight(doc, "python"))
