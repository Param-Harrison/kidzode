text = "A long time ago in a galaxy far far away..."
query = "galaxy"

idx = text.find(query)
if idx != -1:
    # Get 10 chars before and after
    start = max(0, idx - 10)
    end = min(len(text), idx + 10 + len(query))
    
    snippet = "..." + text[start:end] + "..."
    print(snippet)
