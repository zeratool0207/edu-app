import React, { useState, useEffect } from 'react';
import InputBox from '../components/InputBox';
import PassBox from '../components/PassBox';
import BottomBtn from '../components/BottomBtn';

const LoginSample = () => {

   const [ enteredId, setEnteredId ] = useState('');
   const [ enteredPw, setEnteredPw ] = useState('');

   const [ btnIsActive, setBtnIsActive ] = useState(false);

   const onIdChange = (e) => {
    setEnteredId(e.target.value);
   }

   const onPwChange = (e) => {
    setEnteredPw(e.target.value);
   }

   // 최초 렌더링시 1회만 작동
//    useEffect( () => {
//     console.log('1234');
//    },[]); // [ x ] deps   dependency

//    useEffect( () => {
//     console.log(enteredId);
//    },[enteredId]);

//    useEffect( () => {
//     console.log(enteredPw);
//    },[enteredPw]);

   useEffect( () => {
    if ( enteredId !== '' && enteredPw !== '' ) {
        setBtnIsActive(true);
    } else {
        // enteredId === '' || enteredPw === ''
        setBtnIsActive(false);
    }
   },[enteredId, enteredPw]);

   const btnClick = () => {
    alert('성공');
    setEnteredId('');
    setEnteredPw('');
   }

    return (
        <>
            <InputBox 
                label="아이디"
                placeholder="아이디 입력"
                onChange = { onIdChange }
                value={enteredId}
            />
            <PassBox 
                label="비밀번호"
                placeholder="비밀번호 입력"
                onChange = { onPwChange }
                value={enteredPw}
            />
                <div>enteredId: {enteredId}</div>
                <div>enteredPw: {enteredPw}</div>
            {btnIsActive
                ?
                    <BottomBtn
                        name="로그인"
                        varient="primary"
                        onClick={btnClick}
                    />
                :
                    <BottomBtn
                        name="로그인"
                        varient="secondary"
                    />
            }
        </>
    )
}

export default LoginSample;