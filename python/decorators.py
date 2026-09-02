def say_hello():
    print("hello")


def do_something(function):

    def wrapper():
        print("Before")
        function()

    return wrapper
new_function = do_something(say_hello)
new_function()