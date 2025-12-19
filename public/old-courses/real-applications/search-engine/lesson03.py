documents = {
    1: "Python is fun",
    2: "Java is hard",
    3: "Python is snake"
}

index = {}

for doc_id, text in documents.items():
    tokens = text.lower().split()
    for word in tokens:
        if word not in index:
            index[word] = []
        
        if doc_id not in index[word]:
            index[word].append(doc_id)

print(f"Index for 'python': {index.get('python')}")
print(f"Index for 'is': {index.get('is')}")
