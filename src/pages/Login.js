import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import InputBox from '../components/InputBox';
import BottomBtn from '../components/BottomBtn';
import PassBox from '../components/PassBox';

const Login = () => {
    const [ enteredId, setEnteredId ]= useState('');
    const [ enteredPw, setEnteredPw ]= useState('');

    const [ btnIsActive, setBtnIsActive ] = useState(false);

    useEffect( () => {
        if (enteredId !== '' && enteredPw !== '' ) {
            setBtnIsActive(true);
        } else {
            setBtnIsActive(false);
        }
    },[enteredId, enteredPw])

    const onIdChange = (e) => {
        setEnteredId(e.target.value);
    }

    const onPwChange = (e) => {
        setEnteredPw(e.target.value);
    }

    // 최초 렌더링시 1회 작동
//    useEffect( () => {
//     console.log('1234');
//    },[]); // [] : deps ( dependency)

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
    }

    return (
        <>
            <InputBox 
                label="아이디"
                placeholder="아이디 입력"
                onChange={onIdChange}
            />
            <PassBox 
                label="비밀번호"
                placeholder="비밀번호 입력"
                onChange={onPwChange}
            />
            { enteredId !== '' &&
                <div>enteredId : {enteredId}</div>
            }
            { enteredPw !== '' && 
                <div>enteredPw : {enteredPw}</div>
            }
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

export default Login