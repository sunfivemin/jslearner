/*
	- 일급 객체는 함수의 실제 매개변수가 될 수 있다. - 콜백함수
	- 일급 객체는 함수의 반환값이 될 수 있다.
	- 일급 객체는 할당명령문의 대상이 될 수 있다.(변수 등에 할당 가능)
	- 일급 객체는 동일 비교의 대상이 될 수 있다.(값으로 표현 가능)
*/

function foo(arg) {
  return arg;
}

function bar() {
  console.log('바');
}

foo(bar)();

/*
	- 기본값 매개변수 default function parameter
	- 나머지 매개변수 Rest parameter
	- arguments 객체
*/
