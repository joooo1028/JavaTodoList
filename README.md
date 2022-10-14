# JavaTodoList

<strong>사용 기술 스택</strong><br/>
HTML, CSS, JavaScript

<strong> 기능 </strong>
1. 로그인과 로그아웃이 가능합니다. <br/>
-> localStorage를 사용하여 로그인/로그아웃 관리 

2. TodoList를 입력하고 버튼으로 삭제가 가능합니다. <br/>
-> localStorage를 사용하여 TodoList 기능구현,  JSON.stringify, JSON.parse를 사용하여 데이터저장 및 출력

3. 우측상단에 자신의 현재위치와 날씨를 확인가능합니다. <br/>
-> getCurrentPosition 함수를 사용해 자신의 현재위치를 알아내고, 현재위치를 바탕으로 날씨API를 사용

4. 하단에 명언목록 과 배경화면이 랜덤하게 나옵니다.  <br/>
-> Math.random() 를 사용하여 배열의 요소를 랜덤으로 출력
