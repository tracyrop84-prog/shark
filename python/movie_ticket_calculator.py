customer_age=67
is_weekend=False
base_ticket_price=500

if customer_age<=12:
    ticket_price=base_ticket_price*0.5
elif customer_age>=60:
    ticket_price=base_ticket_price*0.7
else:
    ticket_price=base_ticket_price

if is_weekend==True:
    ticket_price=base_ticket_price+100

print("the final ticket price is:",ticket_price)