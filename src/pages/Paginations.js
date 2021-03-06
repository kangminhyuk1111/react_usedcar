import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginations(props) {
    const [postPerPage, setPostPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = [];
    const pageNumbers = Math.ceil(props.usedCarList.length / postPerPage);
    for (let i = 1; i <= pageNumbers; i++) {
        pages.push(i);
    }
    const setPageNums = (num) => {
        props.currentPost(num)
    }

    const postBtn =
        pages.map((page, index) => (
            <button key={index} onClick={() => {
                setPageNums(page)
                props.setCurrentPage(page)
            }}>{page}</button>
        ))
    return (
        <div className='pagination_btn'>
            {postBtn}
        </div>
    )
}
