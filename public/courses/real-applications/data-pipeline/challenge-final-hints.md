# Hints

## 🟢 Hint 1 (Parser)
Use `try/except ValueError` for the int conversion. Skip errors.

## 🟡 Hint 2 (Filter)
`if item['price'] > 500: yield item`

## 🟠 Hint 3 (Formatter)
`yield f"Big Sale: {item['product']} (${item['price']})"`

## 🔴 Hint 4 (Chain)
`formatter(filter(parser(raw_data)))`
