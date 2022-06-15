import React from 'react'
import Navbar from './Navbar'
import '../css/sellcar.css';

export default function SellCar() {
    return (
        <div className='sellcar'>
            <Navbar />
            <div className='sellcar_main'>
                <div className='sellcar_main_intro'>
                    <ul>
                        <li><a>방문평가</a></li>
                        <li><a>비교평가</a></li>
                        <li><a>무평가</a></li>
                    </ul>
                    <div className='intro_1'>
                        <h1>복잡하고 어렵다면?</h1>
                        <h2><p>방문평가</p>로 내차팔기</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
