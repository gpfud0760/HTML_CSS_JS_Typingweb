let target = document.querySelector("#dynamic"); //id가 dynamic 객체를 선택해라. 
let stringArr = ["Lean to HTML", "Lean to CSS", "Lean to Javascript", "Lean to Python", "Lean to Ruby"]
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
//Math 클래스의 floor 메서드 : 소수점 버리는 역할
let selectStringArr = selectString.split("");

dynamic(randomString());

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        //shift() : 배열의 앞에 값부터 빼내는 함수
        setTimeout(function() {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 2000);
    }
}

// 타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

// 배열 표출
function randomString() {
    let stringArr = ["Lean to HTML", "Lean to CSS", "Lean to Javascript", "Lean to Python", "Lean to Ruby"]
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 커서 깜빡임 효과
function blink() {
    target.classList.toggle("active");
}

//반복함수 : setInterval
setInterval(blink, 500); // blink 라는 함수를 0.5초마다 실행해라.