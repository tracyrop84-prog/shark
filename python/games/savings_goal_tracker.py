savings_goal=100000
current_savings=float(input("enter your savings"))

while current_savings<savings_goal:
    print(f"Keep saving! You're ${savings_goal - current_savings:.2f} away from your goal.")
    additional_savings=float(input("Enter the amount you've saved since last check: $"))
    current_savings+=additional_savings

print(f"congratulations youve reached your saving goals!.You saved {current_savings:.2f}")
