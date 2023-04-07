import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const MealDetail = () => {
    const meal = useLoaderData();
    console.log(meal)
    const {strArea, strCategory, strMealThumb, strTags, idMeal} = meal;
    const navigate = useNavigate();

const handleGoBack = () => {
    navigate(-1);
}

    return (
        <div>
            <h1>Detail info of meal: {idMeal}</h1>
            <img src={strMealThumb} alt="" />
            <h1>{strArea}</h1>
            <h2>{strCategory}</h2>
            <p>{strTags}</p>
            <button onClick={handleGoBack} className='my-2 px-2 py-1 rounded-md bg-green-300'>Go Back</button>
        </div>
    );
};

export default MealDetail;