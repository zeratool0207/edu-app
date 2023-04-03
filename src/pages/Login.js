import React from 'react'
import InputBox from '../components/InputBox'
import BottomBtn from '../components/BottomBtn'

const Login = () => {
    return (
        <>
            <InputBox 
                label="아이디"
                type="text"
                placeholder="아이디 입력"
            />
            <InputBox 
                label="비밀번호"
                type="password"
                placeholder="비밀번호 입력"
            />
            <BottomBtn 
                name="로그인"
            />
        </>
    )
}

export default Login