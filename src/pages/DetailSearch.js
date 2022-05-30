import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function DetailSearch(props) {
    const productionData = [
        { id: 'domestic', name: '국산' },
        { id: 'income', name: '수입' },
    ]
    const carSize = [
        { num: '0', size: '경차' },
        { num: '1', size: '소형' },
        { num: '2', size: '준중형' },
        { num: '3', size: '중형' },
        { num: '4', size: '대형' },
        { num: '5', size: '스포츠' },
    ]
    const [isChecked, setIsChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState(new Array());
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    const [toggle5, setToggle5] = useState(false)
    const aaa = useRef(null);

    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        console.log({ target });
        checkedItemHandler(target.value, target.checked);
    }

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            checkedItems.push(id);
            setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.includes(id)) {
            const idx = checkedItems.indexOf(id);
            checkedItems.splice(idx, 1);
            setCheckedItems(checkedItems);
        }
        console.log(checkedItems);
        return checkedItems;
    }

    const data1 = productionData.map((item) => (
        <label key={item.id} className="inner_box" id='box1'>
            <input
                type='checkbox'
                value={item.name}
                onChange={(e) => { checkHandler(e) }}
                name="productionData" 
                className='checkbox_input'/>
                <label for="inner_box"></label>
            <div>{item.name}</div>
        </label>
    ))

    const data2 = carSize.map((item) => (
        <label key={item.num} className="inner_box" id='box2'>
            <input
                type='checkbox'
                value={item.size}
                onChange={(e) => { checkHandler(e) }}
                name="carSize" 
                className='checkbox_input'/>
                <label for="inner_box"></label>
            <div>{item.size}</div>
        </label>
    ))

    const inputChange = (e) => {
        console.log(e.target.value)
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const lowPrice = e.target.low_price.value;
        const highPrice = e.target.high_price.value;
        const lowModelYear = e.target.low_modelYear.value;
        const highModelYear = e.target.high_modelYear.value;
        const lowDistance = e.target.low_distance.value;
        const highDistance = e.target.high_distance.value;
        const values = {
            lowPrice:lowPrice,
            highPrice:highPrice,
            lowModelYear:lowModelYear,
            highModelYear:highModelYear,
            lowDistance:lowDistance,
            highDistance:highDistance,
            checkedItems:checkedItems
        }
        const checkValues = JSON.stringify(values)
        console.log(lowPrice,highPrice,lowModelYear,highModelYear,highModelYear,highDistance)
        console.log(checkedItems);
        const res = await axios.post(`/api/submitdata/${checkValues}`);
        props.detailSearchData(res.data)
    }

    const showDiv1 = (e) => {
        console.log(aaa)
        if (toggle1 == true) {
            setToggle1(false)
        } else {
            setToggle1(true)
        }
    }

    const showDiv2 = (e) => {
        console.log(aaa)
        if (toggle2 == true) {
            setToggle2(false)
        } else {
            setToggle2(true)
        }
    }

    const showDiv3 = (e) => {
        console.log(aaa)
        if (toggle3 == true) {
            setToggle3(false)
        } else {
            setToggle3(true)
        }
    }

    const showDiv4 = (e) => {
        console.log(aaa)
        if (toggle4 == true) {
            setToggle4(false)
        } else {
            setToggle4(true)
        }
    }

    const showDiv5 = (e) => {
        console.log(aaa)
        if (toggle5 == true) {
            setToggle5(false)
        } else {
            setToggle5(true)
        }
    }

    useEffect(() => {

    })
    return (
        <div className="detail_search">
            <h2>상세 검색</h2>
            <form onSubmit={formSubmit} method='post'>
                <h3>국산/수입<a onClick={() => showDiv1()}><i class="fa-solid fa-angle-down"></i></a></h3>
                <div className={toggle1 ? 'accordian_show' : 'accordian_hide'}>
                    {data1} 
                </div>
                <h3>차종<a onClick={() => showDiv2()}><i class="fa-solid fa-angle-down"></i></a></h3>
                <div className={toggle2 ? 'accordian_show' : 'accordian_hide'}>
                    {data2}
                </div>
                <h3>주행거리<a onClick={() => showDiv3()}><i class="fa-solid fa-angle-down"></i></a></h3>
                <div className={toggle3 ? 'accordian_show' : 'accordian_hide'}>
                    <input type='text' name="low_distance" onChange={inputChange} placeholder="최소(KM)"/>
                    <p>~</p>
                    <input type='text' name="high_distance" onChange={inputChange} placeholder="최고(KM)"/>
                </div>
                <h3>연식<a onClick={() => showDiv4()}><i class="fa-solid fa-angle-down"></i></a></h3>
                <div className={toggle4 ? 'accordian_show' : 'accordian_hide'}>
                    <input type='text' name="low_modelYear" onChange={inputChange} placeholder="최소(EX)2022)"/>
                    <p>~</p>
                    <input type='text' name="high_modelYear" onChange={inputChange} placeholder="최고(EX)2022)"/>
                </div>
                <h3>가격<a onClick={() => showDiv5()}><i class="fa-solid fa-angle-down"></i></a></h3>
                <div className={toggle5 ? 'accordian_show' : 'accordian_hide'}>
                    <input type='text' name="low_price" onChange={inputChange} placeholder="최소(만원)"/>
                    <p>~</p>
                    <input type='text' name="high_price" onChange={inputChange} placeholder="최고(만원)"/>
                </div>
                <input type='submit' value='상세조건 검색' className='submit_btn'/>
            </form>
        </div>
    );
}

export default DetailSearch
