
def find_largest(a,b,c) :
    if a>b and a>c:
        return f' {a} is the largest '
    if b>c and b>a:
        return f' {b} is the largest'
    else :
        return f' {credits} is the largest'
    
if __name__ == "__main__" :
    a = int(input("Enter the first number"))
    b = int(input("Enter the second number"))
    c = int(input("Enter the thirst number"))
    
    print(find_largest(a,b,c))