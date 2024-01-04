# 08-제어문

- 제어문은 조건에 따라 코드 블록을 실행하거나 반속 실행할 때 사용한다.

## 💕 블록문

- 블록문은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부르기도 한다.
- 자바스크립트는 블록문을 하나의 실행 단위로 취급한다.

```js
// 블록문
{
    var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}
```

## 💕 조건문

- 조건문은 주어진 조건식의 평가 결과에 따라 코드 블록의 실행을 결정한다.

### 🤍 if ... else 문

`if ... else` 문은 주어진 조건식의 평가 결과에 따라 실행할 코드 블록을 결정한다.

```js
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if...else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if...else if 문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수
```
- 대부분의 `if ... else` 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.
```js
// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
  result = '홀수';
} else {
  result = '짝수';
}

console.log(result); // 짝수
```

```js
var x = 2;
var result;

result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수
```

- 경우의 수가 세 가지라면 다음과 같이 바꿔 쓸 수 있다.

```js
var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수
```

### switch 문

- `switch` 문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 `case` 문으로 실행 흐름을 옮긴다.
- `switch` 문의 표현식과 일치하는 `case` 문이 없다면 실행 순서는 `default` 문으로 이동한다.

```js
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1: monthName = 'January';
  case 2: monthName = 'February';
  case 3: monthName = 'March';
  case 4: monthName = 'April';
  case 5: monthName = 'May';
  case 6: monthName = 'June';
  case 7: monthName = 'July';
  case 8: monthName = 'August';
  case 9: monthName = 'September';
  case 10: monthName = 'October';
  case 11: monthName = 'November';
  case 12: monthName = 'December';
  default: monthName = 'Invalid month';
}

console.log(monthName); // Invalid month
```

- 위 예제에서 `Invalid month` 가 출력되었는데, `break;` 문이 없어서 `switch` 문이 11에서 중지하지 않고 `default` 까지 실행했기 때문이다.
  - 이를 **폴스루** 라고 한다.

```js
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1: monthName = 'January';
    break;
  case 2: monthName = 'February';
    break;
  case 3: monthName = 'March';
    break;
  case 4: monthName = 'April';
    break;
  case 5: monthName = 'May';
    break;
  case 6: monthName = 'June';
    break;
  case 7: monthName = 'July';
    break;
  case 8: monthName = 'August';
    break;
  case 9: monthName = 'September';
    break;
  case 10: monthName = 'October';
    break;
  case 11: monthName = 'November';
    break;
  case 12: monthName = 'December';
    break;
  default: monthName = 'Invalid month';
}

console.log(monthName); // November
```

- `break;` 문을 생략한 폴스루가 유용한 경우도 있다.

```js
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 연도가 4로 나누어떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...)는 윤년이다.
    // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해(2000, 2100, 2200...)는 평년이다.
    // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800...)는 윤년이다.
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log(days); // 29
```

- `if ... else` 문으로 해결 할 수 있다면 하는게 좋지만 조건이 너무 많다면 가독성을 위해 `switch` 문을 사용하는 편이 좋다.

## 💕 반복문

- 반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다.

### 🤍 for 문

- `for` 문은 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.

```js
for (var i = 0; i < 2; i++) {
  console.log(i);
}
```
```
0
1
```

- `for` 문 내에 `for` 문을 중첩해 사용할 수 있다. 

```js
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
```
```
[1, 5]
[2, 4]
[3, 3]
[4, 2]
[5, 1]
```
### 🤍 while 문

- `while` 문은 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다.
- `for` 문은 반복 횟수가 명확할 때 주로 사용하고 `while` 문은 반복 횟수가 불명확할 때 주로 사용한다.

```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}
```
### 🤍 do ... while 문

- ` do ... while` 문은 코드 블록을 먼저 실행하고 조건식을 평가한다.
```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2
```

### 🤍 break 문

- `break` 문은 코드 블록을 탈출한다.
- 레이블 문, 반복문, `switch` 문의 코드 블록 외에 `break` 문을 사용하면 문법 에러가 발생한다.

```js
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');
```

- 레이블 문은 프로그램의 실행 순서를 제어하는 데 사용한다.

```js
// foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log('Done!');
```

- 중첩된 `for` 문의 내부 `for` 문에서 `break` 문을 실행하면 내부 `for` 문을 탈출하여 외부 `for` 문으로 진입한다.
- 이때 내부 `for` 문이 아닌 외부 `for` 문을 탈출하려면 레이블 문을 사용한다.

```js
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log('Done!');
```

- 레이블 문은 유용하지만 중첩된 `for` 문 외에는 일반적으로 권장하지 않는다.

```js
var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 'l'이면
  if (string[i] === search) {
    index = i;
    break; // 반복문을 탈출한다.
  }
}

console.log(index); // 2

// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); // 2
```

### 🤍 continue 문

- `continue` 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다.


```js
var string = 'Hello World.';
var search = 'l';
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3
```