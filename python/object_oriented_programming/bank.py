class BankAccount:
    def __init__(self,owner,balance):
        self.owner=owner
        self.__balance=balance
    def deposit(self,deposit_amount):
        self.__balance=self.__balance+deposit_amount
    def withdraw(self,amount):
        if amount<=self.__balance:
         self.__balance=self.__balance-amount
        else:
            print("Insufficient funds!!")
    def get_balance(self):
        return self.__balance
    def transfer(self,other_account,amount):
        if amount <=self.__balance:
           self.__balance= self.__balance-amount
           other_account.deposit(amount)
        else:
            print("Insufficient funds")
        

    def display(self):
        print("Owner:",self.owner)
        print("Balance:",self.__balance)
tracy=BankAccount("tracy",5000)
jon=BankAccount("Jon",20000)

tracy.deposit(1000)
tracy.withdraw(200)
tracy.withdraw(20000)
balance=tracy.get_balance()
print("Tracy's balance is:", balance)
tracy.transfer(jon,3000)
tracy.display()
print("_______________________________________________")
jon.display()