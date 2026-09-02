class Student:
    # name and age
    def __init__(self,name,age):
        self.name=name
        self.age=age
    # introduce method
    def introduce(self):
        print("my name is",self.name)
        print("i am",self.age, "years")
class UniversityStudent(Student):
     def __init__(self,name,age,university):
         super().__init__(name,age)
         self.university=university
     def introduce(self):
         print("my name is ",self.name,"I am a university student at",self.university)
     def study(self):
         print("I am studying")
tracy=UniversityStudent("tracy",24,"moringa")
jinny=Student("jinny",16)
print("-------------------")
jinny.introduce()
print("-------------------")

tracy.study()
tracy.introduce()