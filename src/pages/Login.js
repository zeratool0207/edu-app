import React,{ useState, useEffect } from 'react';
import InputBox from '../components/InputBox';
import BottomBtn from '../components/BottomBtn';
import PassBox from '../components/PassBox';

const Login = () => {
    const [enteredId, setEnteredId ]= useState('');
    const [enteredPw, setEnteredPw ]= useState('');

    const [ btnIsActive, setBtnIsActive ] = useState(false);

    useEffect( () => {
        if (enteredId !== '' && enteredPw !== '' ) {
            setBtnIsActive(true);
        } else {
            setBtnIsActive(false);
        }
    },[enteredId, enteredPw])

    // const onIdChange = useCallback( (e) => {
    //     setEnteredId(e.target.value);
    // },[])

    const onIdChange = (e) => {
        setEnteredId(e.target.value);
    }

    // const onPwChange = useCallback( (e) => {
    //     setEnteredPw(e.target.value);
    // },[])

    const onPwChange = (e) => {
        setEnteredPw(e.target.value);
    }

    const btnTest = () => {
        console.log(`this is enteredId:::: ${enteredId}`);
        console.log(`this is enteredPw:::: ${enteredPw}`);
    }

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
            <button
                onClick={btnTest}
            >테스트</button>
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