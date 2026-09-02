# def calculate_total_cost(subtotal, state):
#     tax_rates = {
#         'CA': 0.08,
#         'NY': 0.07,
#         'TX': 0.0625
#     }


#     if state in tax_rates:
#         sales_tax = subtotal * tax_rates[state]
#     else:
#         sales_tax = 0.00

#     total_cost = subtotal + sales_tax + shipping_charges
#     return total_cost

# # Example usage
# subtotal = 100.00
# state = 'CA'
# shipping_charges = 10.00 # It lives INSIDE here


# total_cost = calculate_total_cost(subtotal, state)
# print(f"Subtotal: ${subtotal:.2f}")
# print(f"Shipping Charges: ${shipping_charges:.2f}") # ERROR HAPPENS HERE!

# name = input("What is your name? ")
# print(name)

1  age = 20
2  has_id = "yes"
3
4  if age >= 18:
5      if has_id == "yes":
6          print("You can enter")