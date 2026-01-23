import React from 'react'

/*
리액트는 직접 html에 접근하지 않는다. 
왜냐하면 dom을 복사해서 virtural DOM 을 사용하기 때문

*/
export const InputTest = () => {
    let score ;  // 키보드 입력하는 값 저장
    let result ; // 출력 값 저장

    const resultBtn = () =>{
       result = score;
    }

  return (
    <div>
        <p>결과 : {result} </p>
        <input type='number' id="score" name="score" value = {score} />
        <button type='button' onClick={resultBtn}>입력</button>
    </div>
  )
}
