import React from 'react'
import logoImage from '../img/logo.jpg'

export default function Navbar() {
    return (
        <div className='main_header'>
            <img src={logoImage} />
            <div className='main_header_link'>
                <a href='#'>내차팔기</a>
                <a href='#'>내차사기</a>
                <a href='#'>내차시세</a>
            </div>
            <div className='main_header_members'>
                <a href='#'>로그인</a>
                <a href='#'>회원가입</a>
            </div>
        </div>
    )
}
