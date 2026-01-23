import React from 'react'

export const ScoreEXam = () => {

    //랜덤함수 만들기  1 ~ 100사이 
    const score = Math.floor( Math.random() * 100)  + 1;

  return (
    <div>
        <div>점수 : {score}</div>
        <div>
            {
                score >= 40 ? <div>합격!</div> : <div>불합격!</div>
            }
        </div>
    </div>
  )
}
