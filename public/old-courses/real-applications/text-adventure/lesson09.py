def parse(input_text):
    tokens = input_text.lower().split()
    if not tokens: return None, None
    
    verb = tokens[0]
    noun = None
    if len(tokens) > 1:
        noun = tokens[-1] # Simple hack
        
    return verb, noun

v, n = parse("get the red key")
print(f"Action: {v}, Target: {n}")
