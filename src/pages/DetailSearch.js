import React, { useEffect, useState } from 'react'
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
    const [toggle, setToggle] = useState(false)

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
        <label key={item.id} className="inner_box">
            <input
                type='checkbox'
                value={item.name}
                onChange={(e) => { checkHandler(e) }}
                name="productionData" 
                className='checkbox_input'/>
            <div>{item.name}</div>
        </label>
    ))

    const data2 = carSize.map((item) => (
        <label key={item.num} className="inner_box">
            <input
                type='checkbox'
                value={item.size}
                onChange={(e) => { checkHandler(e) }}
                name="carSize" 
                className='checkbox_input'/>
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
        console.log(checkedItems);
        const res = await axios.get(`/api/submitdata/${lowPrice}/${highPrice}/${lowModelYear}/${highModelYear}/${lowDistance}/${highDistance}/${checkedItems}`);
        props.detailSearchData(res.data)
    }

    const showDiv = (e) => {
        if (toggle == true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
        console.log(e)
    }

    useEffect(() => {

    }, [])
    return (
        <div className="detail_search">
            <h2>상세 검색</h2>
            <form onSubmit={formSubmit} method='post'>
                <h3>국산/수입<button onClick={(e) => showDiv(e)}>on</button></h3>
                <div className={toggle ? 'accordian_show' : 'accordian_hide'}>
                    {data1}
                </div>
                <h3>차종<button onClick={(e) => showDiv(e)}>on</button></h3>
                <div className={toggle ? 'accordian_show' : 'accordian_hide'}>
                    {data2}
                </div>
                <h3>주행거리<button onClick={() => showDiv()}>on</button></h3>
                <div className={toggle ? 'accordian_show' : 'accordian_hide'}>
                    <input type='text' name="low_distance" onChange={inputChange} placeholder="최소"/>
                    <input type='text' name="high_distance" onChange={inputChange} placeholder="최고"/>
                </div>
                <h3>연식<button onClick={() => showDiv()}>on</button></h3>
                <div className={toggle ? 'accordian_show' : 'accordian_hide'}>
                    <input type='text' name="low_modelYear" onChange={inputChange} placeholder="최소"/>
                    <input type='text' name="high_modelYear" onChange={inputChange} placeholder="최고"/>
                </div>
                <h3>가격<button onClick={() => showDiv()}>on</button></h3>
                <div className={toggle ? 'accordian_show' : 'accordian_hide'}>
                    <input type='text' name="low_price" onChange={inputChange} placeholder="최소"/>
                    <input type='text' name="high_price" onChange={inputChange} placeholder="최고"/>
                </div>
                <input type='submit' value='검색' className='submit_btn'/>
            </form>
        </div>
    );
}

export default DetailSearch
