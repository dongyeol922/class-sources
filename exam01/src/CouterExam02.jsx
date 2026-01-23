import React, { useState }  from 'react'

export const CouterExam02 = () => {
    /*const [변수이름, 이벤트함수] = useState(초기값); */
    const [count, setCount] = useState(0);

    const addCount = () =>{
        setCount(count+1); // 화면 갱신 
        console.log(count);
    }

    const delCount = () =>{
      setCount(count-1); // 화면 갱신 
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
