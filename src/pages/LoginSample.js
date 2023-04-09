import React from 'react';
import InputBox from '../components/InputBox';
import PassBox from '../components/PassBox';
import BottomBtn from '../components/BottomBtn';

const LoginSample = () => {
 
    return (
        <>
            <InputBox 
                label="아이디"
                placeholder="아이디 입력"
            />
            <PassBox 
                label="비밀번호"
                placeholder="비밀번호 입력"
            />
            <BottomBtn 
                name="로그인"
                varient="primary"
            />
       
        </>
    )
}

export default LoginSample;