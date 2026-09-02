class Product:
   
    def display(self):
        print(f"product {self.name}: {self.price}")
    def __init__(self,name,price):
        self.name=name
        self.price=price
phone=Product("sumsang",30000)

phone.display()

laptop=Product("HP",50000)

laptop.display()