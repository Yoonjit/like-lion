a = int(input("몇 단을 보실 예정인가요?: "))

if (a > 9):
    print("구구단의 범위를 벗어났습니다.")
    a = int(input("몇 단을 보실 예정인가요?: "))

for i in range(1, 10):
    print(a, "*", i, "=", a*i)