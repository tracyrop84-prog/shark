class Student:
    name=""
    age=0
    def __init__(self,name,age):
     self.name=name
     self.age=age
    def introduce(self):
        print("my name is",self.name)
        print("i am",self.age,"years old")

tracy=Student("tracy",78)
# tracy.name="Tracy"
# tracy.age=25
# tracy.self_details(name="tracy",age=25)
tracy.introduce()
john = Student("john",33)
# john.name = "John"
# john.age = 30
john.introduce()