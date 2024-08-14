def swap_two_num (a,b) :
    """
    Discription: swap two numbers
    params : take any two numbers
    result : display the swapped numbers
    """
    a,b = b, a
    return a, b

if __name__ == '__main__':
    num1 = input("Enter first number")
    num2 = input("Enter second number")
    
    num1, num2 = swap_two_num(num1, num2)
    print(f'first number = {num1} & second number = {num2}')