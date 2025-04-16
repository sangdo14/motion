export const splitText = (domEl) => {
  // tag로 구성할 빈 문자열 생성
  let tags = "";
  //파라미터로 전달 받은 돔 요소의 텍스트 추출
  const text = domEl.innerText;
  // for of 반복문 활용해서 문자값을 반복돌며 <span>문자</span>형식으로 담아줌
  for(let el of text) tags += `<span style="display:inline-block;">${el}</span>`;
  //최종적으로 완성된 태그 문자열을 파라미터로 전달받은 요소에 바꿔치기
  domEl.style.textWrap = "nowrap";
  domEl.innerHTML = tags;
};