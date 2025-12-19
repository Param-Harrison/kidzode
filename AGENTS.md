# KidzCode Agent Implementation Guide

**Guide for AI agents creating/extending KidzCode educational platform**

## Architecture Overview

KidzCode is a Python learning platform with 3 progressive levels, 27 projects, and ~365 lessons designed for ages 8-13. All code must be 100% Pyodide-compatible for browser-based execution.

### Technical Constraints

- **No `input()`** - Use static variables only
- **No `turtle`** - Use ASCII art visualization
- **No file I/O** - Use in-memory data structures
- **Pure Python** - Standard library only
- **Instant execution** - No delays or time.sleep()

---

## Course Structure for Implementation

| Course | Title | Projects | Focus Area | Key Concepts |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Foundation | 8 | Basics | Variables, Loops, functions |
| **2** | Engineer | 8 | Systems | Problem Solving, Tools |
| **3** | Data Scientist | 8 | Analysis | Dictionary, JSON, Logic |
| **4** | API Architect | 8 | Backend | Server Logic, DBs, Auth |
| **5** | App Master | 8 | OOP | Classes, State, Inheritance |
| **6** | Game Dev | TBD | Graphics | Pygame Zero, Physics |

---

## Implementation Patterns by Level

### LEVEL 1 - Foundation Patterns

#### Core Concepts to Implement

- **Variables**: Simple assignments, no complex types
- **Loops**: Basic `for` loops with `range()`
- **Functions**: Simple parameter-less functions
- **Data Structures**: Lists and strings only

#### Code Structure Template

```python
# Level 1 Project Template
# Project: [Project Name]
# Concepts: [List of concepts]

# Lesson 1: [Lesson Title]
# [Simple implementation]

# Challenge 1: [Challenge Description]
# [Challenge implementation]
```

#### Example: Countdown Timer Implementation

```python
# Level 1 - Project 1: Countdown Timer
# Concepts: print, variables, for loops, range

# Lesson 1: Print one number
print(10)

# Lesson 3: Store a number in a variable
countdown = 10

# Lesson 8: Your first for loop
for i in range(1, 6):
    print(i)

# Final Challenge: Rocket launch countdown
for i in range(10, 0, -1):
    print(i)
print("Blast off!")
```

---

### LEVEL 2 - Problem Solving Patterns

#### Core Concepts to Implement

- **Functions**: With parameters and return values
- **Data Structures**: Dictionaries, nested lists
- **Algorithms**: Sorting, searching, filtering
- **OOP**: Basic classes and objects

#### Code Structure Template

```python
# Level 2 Project Template
# Project: [Project Name]
# Concepts: [List of concepts]

import random  # As needed

def function_name(parameter):
    """Function description"""
    # Implementation
    return result

# Challenge implementation
```

#### Example: Password Generator Implementation

```python
# Level 2 - Project 1: Password Generator
# Concepts: Random, strings, lists, loops, functions

import random
import string

def generate_password(length=12):
    """Generate a secure password"""
    chars = string.ascii_letters + string.digits + "!@#$%"
    password = ''.join(random.choice(chars) for _ in range(length))
    return password

# Generate multiple passwords
for i in range(5):
    pwd = generate_password()
    print(f"Password {i+1}: {pwd}")
```

---

### LEVEL 3 - Real Applications Patterns

#### Core Concepts to Implement

- **Modules**: Import and use standard library modules
- **Error Handling**: try/except blocks
- **Data Processing**: JSON, CSV handling
- **Testing**: Basic assert statements
- **Advanced Patterns**: Decorators, generators, context managers

#### Code Structure Template

```python
# Level 3 Project Template
# Project: [Project Name]
# Concepts: [List of concepts]

import json
import [other_modules]

class ClassName:
    def __init__(self):
        # Initialize
        pass

    def method_name(self):
        # Implementation
        pass

def main_function():
    """Main implementation"""
    try:
        # Implementation
        pass
    except Exception as e:
        print(f"Error: {e}")

# Test cases
def test_function():
    assert condition, "Error message"
```

#### Example: JSON Data Handler Implementation

```python
# Level 3 - Project 1: JSON Data Handler
# Concepts: JSON module, parsing, nested data

import json

def parse_json_data(json_string):
    """Parse JSON string and return Python dict"""
    try:
        data = json.loads(json_string)
        return data
    except json.JSONDecodeError as e:
        print(f"JSON parsing error: {e}")
        return None

def extract_nested_value(data, keys):
    """Extract nested value from dict using keys list"""
    try:
        result = data
        for key in keys:
            result = result[key]
        return result
    except (KeyError, TypeError):
        return None

# Example usage
json_data = '{"user": {"name": "Jack", "scores": [85, 92, 78]}}'
parsed = parse_json_data(json_data)
name = extract_nested_value(parsed, ["user", "name"])
print(f"User name: {name}")
```

---

## Project Implementation Guidelines

### File Organization

### File Organization

```
public/courses/[course-slug]/
├── book.json             # The Manifest (Lessons, Challenges, Metadata)
├── [project-slug]/       # Project Folder
│   ├── lesson01.md       # Guide
│   ├── lesson01.py       # Code
│   ├── ...
│   ├── challenge01.md
│   ├── challenge01.py
│   ├── challenge01-hints.md
│   └── challenge01-answer.md
```

### Lesson Structure

1. **Concept Introduction**: Clear explanation of single concept
2. **Code Example**: Minimal, working implementation
3. **Practice**: Simple exercise to reinforce concept
4. **Magic Moment**: Immediate visible result

### Challenge Structure

1. **Problem Statement**: Clear, achievable goal
2. **Hints**: Progressive hints (3 levels)
3. **Solution**: Complete working answer
4. **Common Mistakes**: Typical errors and fixes

---

## Code Quality Standards

### Style Guidelines

- **Variable Names**: Descriptive but simple (e.g., `countdown`, `user_name`)
- **Function Names**: Action-oriented (e.g., `generate_password`, `parse_data`)
- **Comments**: Explain "why" not "what"
- **Complexity**: Keep it simple - one concept per lesson

### Error Handling

- **Level 1**: No error handling (focus on core concepts)
- **Level 2**: Basic validation with if statements
- **Level 3**: Proper try/except blocks

### Testing Approach

- **Level 1**: Visual verification (print statements)
- **Level 2**: Simple assert statements
- **Level 3**: Structured test functions

---

## Agent Implementation Checklist

### Before Creating New Content

- [ ] Verify age-appropriateness for target level
- [ ] Ensure Pyodide compatibility
- [ ] Check concept progression fits curriculum
- [ ] Confirm single concept per lesson

### When Creating Lessons

- [ ] Start with simplest possible example
- [ ] Build complexity gradually
- [ ] Include immediate visual feedback
- [ ] Add "magic moment" that excites students

### When Creating Challenges

- [ ] Make it achievable but challenging
- [ ] Provide 3-level progressive hints
- [ ] Include common mistakes and fixes
- [ ] Ensure solution uses taught concepts

### When Implementing Code

- [ ] Follow level-appropriate patterns
- [ ] Use descriptive variable names
- [ ] Add minimal but helpful comments
- [ ] Test in Pyodide environment

---

## Project Templates

### Level 1 Template

```python
# Level 1 - [Project Name]
# Concepts: [List of concepts]

# Lesson 1: [Title]
# [Simple implementation]

# Lesson 2: [Title]
# [Slightly more complex implementation]

# Challenge 1: [Title]
# [Challenge implementation]
```

### Level 2 Template

```python
# Level 2 - [Project Name]
# Concepts: [List of concepts]

import random  # As needed

def function_name(param):
    """Function description"""
    # Implementation
    return result

# Main implementation
# [Code using functions]

# Challenge implementation
```

### Level 3 Template

```python
# Level 3 - [Project Name]
# Concepts: [List of concepts]

import json  # As needed
import [other_modules]

class ClassName:
    def __init__(self):
        # Initialize
        pass

    def method_name(self):
        # Implementation
        pass

def main_function():
    """Main implementation"""
    try:
        # Implementation
        pass
    except Exception as e:
        print(f"Error: {e}")

# Test cases
def test_function():
    assert condition, "Error message"

# Main execution
if __name__ == "__main__":
    main_function()
```

---

## Common Implementation Patterns

### Data Initialization

```python
# Level 1: Simple variables
name = "Python"
age = 10

# Level 2: Lists and dictionaries
students = ["Alice", "Bob", "Charlie"]
scores = {"math": 85, "science": 92}

# Level 3: Complex structures
data = {
    "users": [
        {"name": "Alice", "scores": [85, 92]},
        {"name": "Bob", "scores": [78, 88]}
    ]
}
```

### Loop Patterns

```python
# Level 1: Basic for loop
for i in range(1, 11):
    print(i)

# Level 2: Loop with condition
for item in items:
    if condition:
        # Process item
        pass

# Level 3: Complex iteration
for user in data["users"]:
    for score in user["scores"]:
        # Process nested data
        pass
```

### Function Patterns

```python
# Level 1: Simple function
def say_hello():
    print("Hello, World!")

# Level 2: Function with parameters
def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)

# Level 3: Function with error handling
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")
        return None
```

---

## Testing and Validation

### Pyodide Testing

Always test code in Pyodide environment:

1. Open browser console
2. Load pyodide
3. Execute code
4. Verify output

### Common Issues to Check

- No `input()` function usage
- No file operations
- No external dependencies
- No `time.sleep()` or delays
- Proper error handling for Level 3

### Validation Checklist

- [ ] Code runs in Pyodide without errors
- [ ] Output matches expected results
- [ ] Concept is clearly demonstrated
- [ ] Difficulty matches level expectations
- [ ] Comments are helpful but not excessive

---

This guide provides the foundation for AI agents to create consistent, high-quality educational content that aligns with the KidzCode curriculum and technical requirements.
