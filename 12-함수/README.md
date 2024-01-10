# 12-함수

## 💕 함수란?

- 프로그래밍 언어의 함수는 **일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것**이다.
  - 함수 내부로 입력을 전달받는 변수를 **매개변수`parameter`**, 입력을 **인수`argument`**, 출력을 **반환값`return value`**이라 한다.
- 함수는 함수 정의를 통해 생성한다

```js
// 함수 정의
function add(x, y) {
    return x + y;
};
```

- 함수를 호출하면 코드 블록에 담긴 문들이 일괄적으로 실행되고, 실행 결과, 즉 반환값을 반환한다.

```js
// 함수 호출
var result = add(2, 5);

// 함수 add에 인수 2, 5를 전달하면서 호출하면 반환값 7을 반환한다.
console.log(result); // 7
```

## 💕 함수를 사용하는 이유

- 함수는 몇 번이든 호출할 수 있으므로 **코드의 재사용**이라는 측면에서 매우 유용하다.
- **유지보수의 편의성**을 높이고 실수를 줄요 코드의 **신뢰성**을 높이는 효과가 있다.
- 함수 이름은 함수 내부의 코드를 이해하지 않고도 함수의 역할을 파악할 수 있게 해줘 코드의 **가독성**을 향상시킨다.

## 💕 함수 리터럴

- 자바스크립트의 함수는 객체 타입의 값이다.
  - 함수도 함수 리터럴로 생성할 수 있다.
- 함수 리터럴은 `function` 키워드, 함수 이름, 매개 변수 목록, 함수 몸체로 구성된다.

```js
// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};
```

## 💕 함수 정의

- 함수를 정의하는 방법에는 4가지가 있다

| 함수 정의 방식 | 예시 |
| --- | --- |
| 함수 선언문 | function add(x, y) {<br>return x + y;<br>} |
| 함수 표현식 | var add = function add(x, y) {<br>return x + y;<br>} |
| `Function` 생성자 함수 | var add = new Function('x', 'y', 'return x + y'); |
| 화살표 함수 | var add = (x, y) => x + y; |

### 🤍 함수 선언문

```js
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); // ƒ add(x, y)

// 함수 호출
console.log(add(2, 5)); // 7
```

- 함수 선언문은 함수 이름을 생략할 수 없다.

```js
// 함수 선언문은 함수 이름을 생략할 수 없다.
function (x, y) {
  return x + y;
}
// SyntaxError: Function statements require a function name
```

- 함수 선언문은 표현식이 아닌 문이다.
- 따라서 변수에 할당할 수 없다.
- 함수는 객체를 가리키는 식별자가 필요하다.
  - 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
  - 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.


```js
function add(x, y) {
  return x + y;
};

console.log(add(2, 5)); // 7
```

```js
var add2 = function add(x, y) {
  return x + y;
};

console.log(add2(2, 5)); // 7
console.log(add(2, 5)); // ReferenceError: add is not defined
```

### 🤍 함수 표현식

- 자바스크립트의 함수는 일급 객체다.
  - 함수가 일급 객체라는 것은 함수를 값처럼 자유롭게 사용할 수 있다는 의미이다.

```js
// 함수 표현식
var add = function (x, y) {
  return x + y;
}

console.log(add(2, 5)); // 7
```

### 🤍 함수 생성 시점과 함수 호이스팅

```js
// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};
```

- 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르다.
- 런타임 이전에 함수 객체가 생성되어 있고 함수 이름과 동일한 식별자에 할당까지 완료된 상태이다.
  - 따라서 함수 선언문 이전에 함수를 참조할 수 있고 호출할 수도 있다.
  - 이를 함수 호이스팅이라 한다.
  - 하지만 함수 표현식은 런타임 이전에 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.
    - 변수 할당 시점 이후에 함수를 사용할 수 있다.
- 함수 선언문 대신 표현식을 사용할 것을 권장한다.

### 🤍 Function 생성자 함수

- Function 생성자 함수는 일반적이지 않으며 바람직하지 않다.

```js
var add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7
```

### 🤍 화살표 함수

- 화살표 함수는 `function` 키워드 대신 화살표 (`=>`) 를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
- 화살표 함수는 항상 익명 함수로 정의한다.

```js
// 화살표 함수
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7
```

- 화살표 함수는 생성자 함수로 사용할 수 없으며, 기존 함수와 `this` 바인딩 방식이 다르고, `prototype` 프로퍼티가 없으며, `arguments` 객체를 생성하지 않는다.

## 💕 함수 호출

- 함수는 식별자, 함수 호출 연산자로 호출한다.
- 함수 호출 연산자 내에는 0개 이상의 인수를 쉼표로 구분하여 나열한다.

### 🤍 매개변수와 인수

- 함수에 필요한값을 전달해야 하는 경우, 매개변수를 통해 인수를 전달한다.
  - 인수는 값으로 평가될 수 있는 표현식이어야 한다.


```js
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 호출
// 인수 1과 2는 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);
```
- 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다.
  - 즉, 매개변수의 스코프는 함수 내부다.

```js
function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}

add(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined
```
- 함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.
- 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.

```js
function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}

add(2, 5, 10); // 7
```

- 초과된 인수가 그냥 버려지는 것은 아니다.
  - 모든 인수는 암묵적으로 `argument` 객체의 프로퍼티로 보관된다.

```js
function add(x, y) {
  console.log(arguments); 
  // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  return x + y;
}

add(2, 5, 10); // 7
```

### 🤍 인수 확인

```js
function add(x, y) {
  return x + y;
}
```

- 위 함수를 정의한 개발자의 의도는 2개의 숫자를 전달받아 그 합을 반환하는 것으로 추측된다.

```js
function add(x, y) {
  return x + y;
}

console.log(add('a' + 'b')); // 'ab'
```

- 위 코드는 아무 문제가 없지만 개발자의 의도와 다르다.
  - 따라서 함수를 정의할 때 인수 확인이 필요하다.

```js
function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
  }
  return x + y;
}

console.log(add(2)); // '인수는 모두 숫자 값이어야 합니다.', y에 전달된 인자가 undefined 이기 때문
console.log(add('a' + 'b')); // '인수는 모두 숫자 값이어야 합니다.'
```

- 이처럼 함수에 적절한 인수가 전달되었는지 확인하더라도 부적절한 호출을 사전에 방지할 수는 없고 에러는 런타임에 발생하게 된다.
  - 타입스크립트와 같은 자바스크립트의 상위 확장을 도입하여 부적절한 호출을 방지하는 것도 하나의 방법이다.
- `argument` 객체를 통해 인수 개수를 확인할 수도 있다.

```js
function add(a, b, c) { 
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
```

- 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다.

```js
function add(a = 0, b = 0, c = 0) { 
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
```

### 🤍 매개변수의 최대 개수

- 매개변수의 최대 개수는 정해져있지 않지만 최대 3개 이상을 넘지 않는 것을 권장한다.
  - 이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.
  - 만약 3개 이상의 매개변수가 필요하다면 하나의 매개변수를 선언하고 객체를 인수로 전달하는 것이 유리하다.
  - 
```js
$.ajax({
  method: 'POST',
  url: '/user',
  data: { id: 1, name: 'Lee' },
  cache: false
});
```

- 객체를 인수로 사용하는 경우 프로퍼티 키만 정확히 지정하면 매개변수의 순서를 신경 쓰지 않아도 된다.

### 🤍 반환문

- 함수는 `return` 키워드와 표현식으로 이뤄진 만환문을 사용해 실행 결과를 함수 외부로 반환할 수 있다.

```js
function multiply(x, y) {
  return x * y; // 반환문
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15
```

- 함수 호출은 표현식이다.
- 반환문은 두 가지 역할을 한다.
  - 첫째, 함수 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다.
    - 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
  - 둘째, 반환문은 `return` 키워드 뒤에 오는 표현식을 평가해 반환한다.
  - 반환문은 생략할 수 있다.
  - 반환문은 함수 몸체 내부에서만 사용할 수 있다.

## 💕 참조에 의한 전달과 외부 상태의 변경

- 매개변수도 함수 몸체 내부에서 변수와 동일하게 취급된다.
  - 따라서 매개변수 또한 타입에 따라 값에 의한 전달, 참조에 의한 전달 방식을 그대로 따른다.

```js
// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

// 외부 상태
var num = 100;
var person = { name : 'Lee' };

console.log(num); // 100
console.log(person); // { name: 'Lee' }

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // { name: 'Kim' }
```

- 이처럼 함수가 외부 상태를 변경하면 상태 변화룰 추적하기 어려워진다.
  - 이러한 현상은 객체가 변경할 수 있는 값이며, 참조에 의한 전달 방식으로 동작하기 때문에 발생하는 부작용이다.
  - 이러한 문제의 해결 방법 중 하나는 객체를 불변 객체로 만들어 사용하는 것이다.

## 💕 다양한 함수의 형태

### 🤍 즉시 실행 함수
- 함수 정의외 동시에 즉시 호출되는 함수를 즉시 실행 함수라고 한다.
  - 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.

```js
// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
}());
```
- (솔직히 쓸 이유를 모르겠다)
  
```js
// 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
}());

foo(); // 실행안됨
```

- 즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수도 있는 변수나 함수 이름의 충돌을 방지할 수 있다.

### 🤍 재귀 함수

- 함수가 자기 자신을 호출하는 것을 재귀 호출이라 한다.
- 재귀 함수는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.
  - 재귀 함수는 반복되는 처리를 위해 사용한다.

```js
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}

countdown(10);
```
- 위 `countdown` 함수는 문제없이 잘 동작한다.
- 하지만 반복문 없이도 구현할 수 있는 방법이 있다.
  - 바로 재귀함수를 사용하는 것이다.

```js
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(10);
```

- 이처럼 자기 자신을 호출하는 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다.

```js
// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

- `factorial` 함수 내부에서 재귀 호출할 때 사용한 식별자 `factorial` 은 함수 이름이다.
  - 함수 이름은 몸체 내부에서만 유효하다.
  - 함수 외부에서 함수를 호출할 때는 반드시 함수를 가리키는 식별자로 해야 한다.

```js
// 함수 표현식
var factorial = function foo(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
  return n * factorial(n - 1);

  // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
  // console.log(factorial === foo); // true
  // return n * foo(n - 1);
};

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log(foo(5)); // ReferenceError: foo is not defined
```

- 재귀 함수는 자신을 무한 재귀 호출한다.
  - 따라서 재귀 함수 내에는 **탈출 조건**을 반드시 만들어야 한다.
- 재귀 함수는 반복되는 처리를 반복문 없이 구현할 수 있다는 장점이 있지만 무한 반복에 빠질 위함이 있다.
  - 따라서 재귀 함수는 반복문을 사용하는 것보다 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용하는 것이 바람직하다.

### 🤍 중첩 함수

- 함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라 한다.
  - 그리고 중첩 함수를 포함하는 함수는 외부 함수라 부른다.

```js
function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }

  inner();
}

outer();
```

- 단, 호이스팅으로 인해 혼란이 발생할 수 있으므로 `if`문이나 `for`문 등의 코드 블록에서 함수 선언문을 통해 함수를 정의하는 것은 바람직하지 않다.

### 🤍 콜백 함수

- 어떤 일을 반복 수행하는 `repeat` 함수를 정의해 보자.

```js
// n만큼 어떤 일을 반복한다
function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4
```

- `repeat` 함수는 매개변수를 통해 전달받은 숫자만큼 반복하며 `console.log(i);` 를 호출한다.
  - `console.log(i);` 때문에 다른 일을 할 수가 없어서 `repeat` 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

```js
// n만큼 어떤 일을 반복한다.
function repeat1(n) {
  // i를 출력한다.
  for (var i = 0; i < n; i++) console.log(i);
}

repeat1(5); // 0 1 2 3 4

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
  for (var i = 0; i < n; i++) {
    // i가 홀수일 때만 출력한다.
    if (i % 2) console.log(i);
  }
}

repeat2(5); // 1 3
```

- 이렇게 하게 되면 함수의 일부분만 다르기 때문에 매번 함수를 새롭게 정의해야 한다.
  - 이 문제는 함수를 합성하는 것으로 해결할 수 있다.
  - 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것이다.

```js
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

var logAll = function (i) {
  console.log(i);
};

repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) console.log(i);
};
repeat(5, logOdds); // 1 3
```

- 위 `repeat` 함수는 경우에 따라 변경되는 일을 함수 `f` 로 추상화했고 이를 외부에서 전달받는다.
- 이처럼 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 **콜백 함수**라고 하며, 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 **고차 함수**라고 한다.
- 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
- 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
  - 다시 말해, 콜백 함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.
- 콜백 함수는 비동기 처리에도 활용되는 중요한 패턴이다.

```js
// 콜백 함수를 사용한 이벤트 처리
// myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById('myButton').addEventListener('click', function () {
  console.log('button clicked!');
});

// 콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력한다.
setTimeout(function () {
  console.log('1초 경과');
}, 1000);
```

### 🤍 순수 함수와 비순수 함수

- 함수형 프로그래밍에서는 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수를 순수 함수라고 한다.
- 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수를 비순수 함수라고 한다.
- 순수 함수는 동일한 인수가 전달되면 언제나 동일한 값을 반환하는 함수다.

```js
var count = 0; // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2
```

- 비순수 함수는 외부 상태를 변경하는 함수다.

```js
var count = 0; // 현재 카운트를 나타내는 상태: increase 함수에 의해 변화한다.

// 비순수 함수
function increase() {
  return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2
```
