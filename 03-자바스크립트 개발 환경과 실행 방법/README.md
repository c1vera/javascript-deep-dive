# 01-프로그래밍

## 💕 자바스크립트 실행 환경
- 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.
- 브라우저 뿐만 아니라 `Node.js`도 자바스크립트 엔진을 내장하고 있다.
- 그러나, 브라우저와 `Node.js`는 용도가 다르다.
- 브라우저는 HTML, CSS, 자바스크립트를 실행해 웹페이지를 브라우저 화면에 렌더링하는 것이 주된 목적이다.
- `Node.js`는 브라우저 외부에서 자바스크립트 실행 환경을 제공하는것이 주된 목적이다.

## 💕 브라우저에서 자바스크립트 실행

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Counter</title>
</head>
<body>
  <div id="counter">0</div>
  <button id="increase">+</button>
  <button id="decrease">-</button>
  <script>
    // 에러를 발생시키는 코드: 선택자는 'counter-x'가 아니라 'counter'를 지정해야 한다.
    const $counter = document.getElementById('counter-x');
    const $increase = document.getElementById('increase');
    const $decrease = document.getElementById('decrease');

    let num = 0;
    const render = function () { $counter.innerHTML = num; };

    $increase.onclick = function () {
      num++;
      console.log('increase 버튼 클릭', num);
      render();
    };

    $decrease.onclick = function () {
      num--;
      console.log('decrease 버튼 클릭', num);
      render();
    };
  </script>
</body>
</html>
```
- 중단점을 걸고, 오류가 난 부분을 실행시키면 디버그 모드로 진입하는데 그 때 `$counter`의 값을 확인해보면 에러가 발생한 원인을 제거하기 용이하다.