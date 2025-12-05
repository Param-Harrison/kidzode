# Final Challenge: File Locker 📦

Build a CLI tool to Encrypt and Decrypt files.

**Specs:**
1. Command: `python locker.py encrypt <file> <key>`
   - Reads file.
   - XORs every byte with Key (Int).
   - Saves to `<file>.enc`.
2. Command: `python locker.py decrypt <file> <key>`
   - Reads `.enc` file.
   - XORs every byte with Key (Int).
   - Saves to `<file>.dec`.

**Goal:**
1. Create `hello.txt` ("Hello World").
2. Encrypt it with Key `55`.
3. Delete `hello.txt`.
4. Decrypt `hello.txt.enc` with Key `55`.
5. Check if it matches!

Go protect your data! 🛡️
