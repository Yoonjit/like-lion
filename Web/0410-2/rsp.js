function button() {
  console.log("게임 시작 버튼 클릭됨");

  let win = 0; // 내가 이긴 횟수를 카운트

  while (true) {
    // 컴퓨터의 공격을 랜덤으로 뽑아줌
    // 1 ~ 9 중에서 3으로 나눴을 때의 나머지에 따라 다른 결과를 불러오도록 구현
    randomNum = Math.floor(Math.random() * 10);
    if (randomNum % 3 === 0) {
      attack = "가위";
    } else if (randomNum % 3 === 1) {
      attack = "바위";
    } else if (randomNum % 3 === 2) {
      attack = "보";
    }

    // 나의 행동
    let q = prompt("가위, 바위, 보 중에 어떤 걸 내시겠습니까?");
    if (q === "가위") {
      console.log("나는 가위!");

      if (attack === "가위") {
        console.log("상대도 가위!");
        console.log("비겼습니다.");
      } else if (attack === "바위") {
        console.log("상대는 바위!");
        console.log("당신이 졌습니다.");
      } else {
        console.log("상대는 보!");
        console.log("당신이 이겼습니다.");
        win++;
      }
    } else if (q === "바위") {
      console.log("나는 바위!");

      if (attack === "가위") {
        console.log("상대는 가위!");
        console.log("당신이 이겼습니다.");
        win++;
      } else if (attack === "바위") {
        console.log("상대도 바위!");
        console.log("비겼습니다.");
      } else {
        console.log("상대는 보!");
        console.log("당신이 졌습니다.");
      }
    } else if (q === "보") {
      console.log("나는 보!");

      if (attack === "가위") {
        console.log("상대는 가위!");
        console.log("당신이 졌습니다.");
      } else if (attack === "바위") {
        console.log("상대는 바위!");
        console.log("당신이 이겼습니다.");
        win++;
      } else {
        console.log("상대도 보!");
        console.log("비겼습니다.");
      }
    } else {
      console.log("잘못된 입력입니다. 다시 입력해주세요.");
    }

    if (win === 3) {
      break;
    }
  }

  console.log("축하합니다. 3번 승리하셨습니다.");
}
