# Mood Detection Challenge

Amazing, Entertainment Bot! Your chatbot is fun!
But the BEST chatbots understand how you FEEL!
Can you make it detect moods and respond appropriately?

## 🎯 Today's Mission
Add mood detection to make your chatbot emotionally intelligent!

## 📚 Before You Start
You know how to use `in` to check if text contains certain words.

## Your Challenge!
1. Detect if the user is happy, sad, or excited
2. Respond with appropriate empathy
3. Make your chatbot a good friend!

```python
import random

print("=== MY PERSONAL CHATBOT ===")
print("Bot: Hi! I'm your friendly chatbot!")
print()

# Joke database
jokes = [
    "Why did the programmer quit? Because they didn't get arrays!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "What's a computer's favorite snack? Microchips!"
]

# Ask for name
user_name = input("Bot: What's your name? ")
print(f"Bot: Nice to meet you, {user_name}!")
print()

# Get user input
user_input = input("You: ")

# Mood detection using keyword checking
if "sad" in user_input or "unhappy" in user_input:
    print(f"Bot: I'm sorry you're feeling sad, {user_name}.")
    print("Bot: Want to hear a joke to cheer you up?")
elif "happy" in user_input or "great" in user_input or "good" in user_input:
    print(f"Bot: That's wonderful, {user_name}! I'm happy you're happy!")
elif "excited" in user_input or "amazing" in user_input:
    print(f"Bot: Wow! Your excitement is contagious, {user_name}!")
elif "angry" in user_input or "mad" in user_input:
    print(f"Bot: I understand you're upset, {user_name}. Want to talk about it?")
elif user_input == "tell me a joke" or user_input == "joke":
    joke = random.choice(jokes)
    print(f"Bot: {joke}")
elif user_input == "hello":
    print(f"Bot: Hello, {user_name}! How are you feeling today?")
elif user_input == "goodbye":
    print(f"Bot: Goodbye, {user_name}! Hope you feel better!")
else:
    print(f"Bot: I'm here for you, {user_name}. Tell me how you're feeling!")
```

## ✨ Magic Moment
Your chatbot can detect emotions and respond with empathy!

## 💡 Important Things to Remember
- `"sad" in user_input` checks if the word "sad" appears anywhere
- We can check for multiple keywords with `or`
- This works even if the user types "I'm sad" or "feeling sad"
- Empathetic responses make the bot feel more human!

## 🎨 Try This Next!
- Add more emotions (tired, bored, confused)
- Add responses for specific situations (homework, tests, friends)
- Make it remember the user's mood across messages
- Add a loop so you can chat multiple times
- Create different bot personalities (funny, serious, wise)

## 🤔 Stuck? Check This!
- **Not detecting mood?** Make sure you're using `in` not `==`
- **Want case-insensitive?** Use `user_input.lower()` to convert to lowercase first
- **Testing?** Try typing "I'm sad" or "I feel happy"

## 🌟 Show Your Parents!
"Look! I made an emotionally intelligent chatbot that understands how I feel!"

You just unlocked the **AI Developer** superpower! ⭐

**CHALLENGE COMPLETE!** You've finished Project 12! 🎉

**🎊 CONGRATULATIONS! YOU'VE COMPLETED ALL 12 PROJECTS! 🎊**
**You are now a PIXEL HERO!**
