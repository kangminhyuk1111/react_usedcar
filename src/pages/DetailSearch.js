import React from 'react'
import { useForm } from 'react-hook-form';

function DetailSearch() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        window.location.href = `/?carSize=${data.carSize}&carManu=${data.carManufacturer}&fuel=${data.fuel}`;
    };
    return (
        <div className="detail_search">
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register('carSize', { required: true })}>
                    <option value='1'>소형</option>
                    <option value='2'>준중형</option>
                    <option value='3'>중형</option>
                    <option value='4'>대형</option>
                    <option value='5'>SUV</option>
                    <option value='6'>벤</option>
                    <option value='7'>화물</option>
                    <option value='8'>스포츠카</option>
                    <option value='9'>캠핑카</option>
                </select>
                <select {...register('carManufacturer', { required: true })}>
                    <option value='hy'>현대</option>
                    <option value='ch'>쉐보레</option>
                    <option value='dae'>대우</option>
                    <option value='ss'>쌍용</option>
                    <option value='ls'>르노삼성</option>
                    <option value='kia'>기아</option>
                    <option value='gene'>제네시스</option>
                </select>
                <select {...register('fuel', { required: true })}>
                    <option value='gasoline'>휘발유</option>
                    <option value='diesel'>경유</option>
                    <option value='lpg'>LPG</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default DetailSearch
