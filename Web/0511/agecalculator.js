// 요소 가져오기
let el = document.getElementById("birthday");
let elResult = document.getElementById("result");
let elSubmit = document.getElementById("submit");

// 생일을 기준으로 만 나이 계산하려면 오늘 날짜가 필요함
const today = new Date(); // Date 안에 아무것도 입력 안 하면 오늘 날짜를 반환
// console.log(today); -> 오늘 날짜 출력됨

function calculateAge() {
  let birthDate = new Date(el.value);

  let age;

  if (
    today.getMonth() > birthDate.getMonth() || // 오늘 월이 생일의 월을 넘겼거나
    (today.getMonth() == birthDate.getMonth() && // 오늘 월이 생일의 월과 같고,
      today.getDate() >= birthDate.getDate()) // 오늘 날짜가 생일의 날짜를 지났거나 같다면,
  ) {
    age = today.getFullYear() - birthDate.getFullYear();
  } else {
    // 생일이 오늘 날짜로부터 지나지 않았다면,
    age = today.getFullYear() - birthDate.getFullYear() - 1;
  }

  elResult.innerText = `귀하의 만 나이는 ${age}세 입니다.`;
  return age;
}

elSubmit.addEventListener("click", calculateAge);
