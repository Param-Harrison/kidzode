# Hints

## 🟢 Hint 1
XOR is reversible! The `encrypt` and `decrypt` logic is identical: `byte ^ key`.

## 🟡 Hint 2
Read/Write mode must be binary: `rb` and `wb`.

## 🔴 Hint 3
Loop: `out_data = bytes([b ^ int(key) for b in in_data])`
