def get_names():
    yield "mario"
    yield "luigi"

def capitalizer(source):
    for name in source:
        yield name.capitalize()

stream = get_names()
pipeline = capitalizer(stream)

print(list(pipeline))
