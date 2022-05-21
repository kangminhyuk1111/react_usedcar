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

    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        console.log({ target });
        checkedItemHandler(target.value, target.checked);
    }

    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            checkedItems.push(id);
            setCheckedItems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
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
                name="productionData" />
            <div>{item.name}</div>
        </label>
    ))

    const data2 = carSize.map((item) => (
        <label key={item.num} className="inner_box">
            <input
                type='checkbox'
                value={item.size}
                onChange={(e) => { checkHandler(e) }}
                name="carSize" />
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
        console.log(checkedItems);
        const res = await axios.get(`/api/submitdata/${lowPrice}/${highPrice}/${checkedItems}`);
        props.detailSearchData(res.data)
    }

    useEffect(() => {

    }, [])
    return (
        <div className="detail_search">
            <form onSubmit={formSubmit} method='post'>
                {data1}
                {data2}
                <input type='text' name="low_price" onChange={inputChange} />
                <input type='text' name="high_price" onChange={inputChange} />
                <input type='submit' />
            </form>
        </div>
    );
}

export default DetailSearch
