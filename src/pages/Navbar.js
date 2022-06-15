import React, { useEffect, useState } from 'react'
import logoImage from '../img/logo.jpg'

export default function Navbar() {
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    return (
        <div className='main_header'>
            <img src={logoImage} />
            <div className='main_header_link'>
                <a href='#'
                    onMouseOver={() => setIsHover1(true)}
                    onMouseLeave={() => setIsHover1(false)}>
                    내차팔기
                    <ul className={`header_ul ${isHover1 ? 'active' : ''}`}>
                        <li><a href='/react_usedcar/sellcar'>내차팔기 홈</a></li>
                        <li>방문평가 판매</li>
                        <li>비교견적 판매</li>
                        <li>무평가 판매</li>
                    </ul>
                </a>
                <a href='#'
                    onMouseOver={() => setIsHover2(true)}
                    onMouseLeave={() => setIsHover2(false)}>
                    내차사기
                    <ul className={`header_ul ${isHover2 ? 'active' : ''}`}>
                        <li>내차사기 홈</li>
                        <li>라이브 스튜디오</li>
                        <li>스마트옥션 인증차</li>
                        <li>오토벨&</li>
                    </ul>
                </a>
                <a href='#'>
                    내차시세
                </a>
            </div>
            <div className='main_header_members'>
                <a href='#'>로그인</a>
                <a href='#'>회원가입</a>
            </div>
        </div>
    )
}
