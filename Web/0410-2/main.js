const name1 = "윤지수" // 너는 상수얌
let name2 = "윤짓" // 너는 변수얌

// name1 = "윤지지지수" -> 상수라서 값 바꾸려고 하면 타입 에러
name2 = "윤지지지수"

console.log(name1)
console.log(name2)

const x = 3
const y = 2

console.log(x + y) // 5
console.log(x - y) // 1
console.log(x * y) // 6
console.log(x / y) // 1.5
console.log(x % y) // 1

let q = prompt("무엇을 주문하시겠습니까?", "짜장면 or 짬뽕") // '빨리 입력해'는 없어도 무방
if (q === "짜장면") {
    console.log("7,000원입니다.")
} else if (q === "짬뽕") {
    console.log("7,500원입니다.")
} else {
    console.log("그런 거 안 팔아요.")
}

function button() {
	console.log("버튼 클릭했다!!!")
}