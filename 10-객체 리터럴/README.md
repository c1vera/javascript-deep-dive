# 10-객체 리터럴

## 💕 객체란?

- 자바스크립트는 객체 기반의 프로그래밍 언어고, 자바스크립트를 구성하는 거의 **모든 것**이 객체다.
- 원시 값은 변경 불가능한 값이지만, 객체는 변경 가능한 값이다.

## 💕 객체 리터럴에 의한 객체 생성
- 자바스크립트는 다양한 객체 생성 방법을 지원한다.
  - 객체 리터럴
  - `Object` 생성자 함수
  - 생성자 함수
  - `Object.create` 메서드
  - 클래스(ES6)

```js
var person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: ƒ}
```

- 만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.

```js
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```

## 💕 프로퍼티

- **객체는 프로퍼티의 집합이며, 프로퍼티는 키와 겂으로 구성된다.**

```js
var person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: 'Lee',
    // 프로퍼티 키는 age, 프로퍼티 값은 20
    age: 20
};
```

- 프로퍼티를 나열할 때는 쉼표`(,)` 로 구분한다.
- 프로퍼티 키는 식별자 열할을 하고, 문자열이다.
- 식별자 네이밍 규칙을 따른다면 따옴표를 생략할 수 있지만 그렇지 않다면 반드시 따옴표를 사용해야 한다.

```js
var person = {
  firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  'last-name': 'Lee'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}
```
- 자바스크립트 엔진은 따옴표를 생략한 `last-name` 을 연산자가 있는 표현식으로 해석한다.

```js
var person = {
  firstName: 'Ung-mo',
  last-name: 'Lee' // SyntaxError: Unexpected token -
};
```

- 문자열 또는 문자열로 평가할 수 있는 표현식을사용해 프로퍼티 키를 동적으로 생성할 수도 있다.
- 이 경우에는 프로퍼티 키로 사용할 표현식을 대괄호(`[...]`)로 묶어야 한다.

```js
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}
```

## 💕 메서드

- 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 **메서드**라 부른다.

```js
var circle = {
  radius: 5, // ← 프로퍼티

  // 원의 지름
  getDiameter: function () { // ← 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  }
};

console.log(circle.getDiameter()); // 10
```

## 💕 프로퍼티 접근

- 프로퍼티에 접근하는 방법은 다음과 같이 두 가지다.

```js
var person = {
  name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Lee
```

- 대괄호 표기법을 사용하는 경우 **대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열**이어야 한다.

```js
var person = {
  name: 'Lee'
};

console.log(person[name]); // ReferenceError: name is not defined
```

- 프로퍼티 키가 네이밍 규칙을 준수하지 않는 이름이라면 반드시 대괄호 표기법을 사용해야 한다.

```js
var person = {
  'last-name': 'Lee',
  1: 10
};

person.'last-name';  // -> SyntaxError: Unexpected string
person.last-name;    // -> 브라우저 환경: NaN
                     // -> Node.js 환경: ReferenceError: name is not defined
person[last-name];   // -> ReferenceError: last is not defined
person['last-name']; // -> Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1;     // -> SyntaxError: Unexpected number
person.'1';   // -> SyntaxError: Unexpected string
person[1];    // -> 10 : person[1] -> person['1']
person['1'];  // -> 10
```

## 💕 프로퍼티 값 갱신

```js
var person = {
  name: 'Lee'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person);  // {name: "Kim"}
```

## 💕 프로퍼티 동적 생성

- 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성된다.

```js
var person = {
  name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Lee"}
```

## 💕 프로퍼티 삭제

- `delete` 연산자는 객체의 프로퍼티를 삭제한다. 

```js
var person = {
  name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Lee"}
```

```js
```

```js
```

```js
```