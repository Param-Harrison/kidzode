# Planet Finder 🔭

## Quick Reminder
You built a massive database of planets using lists and dictionaries. Incredible! 🌟

## Your Mission
If our database had 1,000 planets, finding one would be like looking for a needle in a haystack. We need to build a **Search Engine** that can find any planet just by typing its name.

## The Scanner Pattern 🔍
To find something, we tell the computer to:
1. Walk through every planet in the list.
2. Check: "Is this the name I'm looking for?"
3. If **Yes**, stop and give me the info!

```python
def find_planet(search_name):
    for planet in planets:
        if planet["name"] == search_name:
            return planet
```

## The "Not Found" Safety Net
What if we search for "Planet Pizza"? It's not in our list! Good coders always handle mistakes gracefully:
```python
if result == None:
    print("Sorry, that's not in our records! 🛸")
```

## Try It!
1. Use the search box (the code input) to look for `"Earth"`.
2. Click **Run** and see our Telescope find the data!
3. **Challenge:** Search for a planet that *isn't* there. What does the computer say?

## What You Learned
✅ You can use a loop and an `if` statement to build a search engine.
✅ Use `return` to send the found data back to you.
✅ Always plan for what happens if the data isn't found!

## Pro Tip
This "Search Pattern" is exactly how Google works when you type something into the search bar! 🌎
