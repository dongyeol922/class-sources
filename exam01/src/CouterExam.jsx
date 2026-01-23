import React from 'react'

export const CouterExam = () => {
    let count = 0;

    const addCount = () =>{
        count++;
        console.log(count);
    }

    const delCount = () =>{
       count--;   
       console.log(count);
    }

  return (
    <div>
        <p>{count}</p>
        <div>
            <button type="button" onClick={addCount}>증가</button>
            <button type="button" onClick={delCount}>감소</button>
        </div>
    </div>
  )
}
