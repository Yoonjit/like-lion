# fn + ctrl + f5

print("나이 데이터베이스에 오신 것을 환영합니다.")
print()

mydict = {}

def showList():
    print("-----나이 데이터베이스-----")
    items = mydict.items()
    for item in items:
        print(item[0], ":", item[1])
    print("---------------------------")
    return 0

while(1):
    inputs = int(input("어떤 작업을 수행하시겠습니까? 1)생성 2)목록 3)수정 4)삭제 5)종료 -> "))

    if (inputs == 1): # 생성
        key = input("이름을 입력해주세요 -> ")
        value = int(input("나이를 입력해주세요 -> "))
        mydict[key] = value
        continue

    elif (inputs == 2): # 목록
        showList()
        continue

    elif (inputs == 3): # 수정
        showList()
        key = input("나이를 수정할 이름을 입력해주세요 -> ")
        value = int(input("수정할 나이를 입력해주세요 -> "))
        mydict[key] = value  
        continue

    elif (inputs == 4): # 삭제
        showList()
        key = input("삭제할 사용자 이름을 입력해주세요 -> ")
        del(mydict[key])
        continue

    elif (inputs == 5): # 종료
        break