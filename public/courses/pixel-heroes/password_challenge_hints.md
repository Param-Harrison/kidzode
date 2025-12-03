# Hints

Ask the user for password length, then convert it with `int()`. Remember: `input()` gives text, so you need `int(length)`.

---

Create one big string with ALL characters: `all_chars = "ABC...xyz012...!@#..."`. This mixes everything together!

---

Use a loop to build the password! `for i in range(password_length):` and inside, add one random character: `password = password + random.choice(all_chars)`.

---

Start with an empty password: `password = ""`. Each time through the loop, add one character. After the loop, print the complete password!

