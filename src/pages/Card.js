import React from 'react'

export default function Card() {
    return (
        <div className='main_card'>
            <div class="flex flex-col box-content h-full rounded-lg bg-zinc-100">
                <span className='py-4 p-6 text-xl font-bold'>라이브 스튜디오</span>
                <p className='pl-6 pr-6 text-base'>오토벨 전문가가 꼼꼼하게 진단한 차량을 360도 이미지로 확인하세요.</p>
                <p className='pl-6 pr-6 pt-8 text-sm'>자세히보기</p>
            </div>
            <div class="flex flex-col box-content h-full rounded-lg bg-zinc-100">
                <span className='py-4 p-6 text-xl font-bold'>스마트옥션 인증차</span>
                <p className='pl-6 pr-6 text-base'>전국 현대글로비스 오토벨 경매센터에서 막 낙찰된 차량을 만나보세요.</p>
                <p className='pl-6 pr-6 pt-8 text-sm'>자세히보기</p>
            </div>
            <div class="flex flex-col box-content h-full rounded-lg bg-zinc-100">
                <span className='py-4 p-6 text-xl font-bold'>오토벨&</span>
                <p className='pl-6 pr-6 text-base'>오토벨과 함께하는 매매단지, 금융사 인증, 수입인증 차량을 만나보세요</p>
                <p className='pl-6 pr-6 pt-8 text-sm'>자세히보기</p>
            </div>
        </div>
    )
}