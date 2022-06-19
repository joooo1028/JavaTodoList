const clock = document.querySelector("h2#clock");

function getclock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // padStart 는 string 에서 길이를 정하고 그 길이가 안될경우 앞에 넣을 문자를 지정해주는데 사용(padEnd는 반대로 뒤에넣어줌)
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getclock();
setInterval(getclock, 1000);
