import React from 'react'
import InputBox from '../components/InputBox'
import BottomBtn,{ useState } from '../components/BottomBtn'
import PassBox from '../components/PassBox'

const Login = () => {

    

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
            />
        </>
    )
}

export default Login