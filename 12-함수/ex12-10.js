// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(add2); // undefined

// 함수 호출
console.log(add(2, 5)); // 7

console.log(add2(2, 5));

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};

// 화살표 함수
var add2 = (x, y) => x + y;