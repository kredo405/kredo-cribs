import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import { Link } from 'react-router-dom';
import images4 from '../img/images.jpg'


const Tests = () => {
    const state = useSelector(state => state)
    const db = state.db
    const [data, setData] = useState('gsg')

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "mathematics"));
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
            });
        }

        getData()
    }, [])

    return (
        <div className="container">
            {
                data ?
                    <>
                        <BackTop />
                        <div className="flex justify-center">
                            <h1 className="font-serif text-2xl lg:text-4xl font-black text-emerald-700 text-center">Тетсы {state.subject.name} {state.subject.class} класс</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center mt-5">
                                <img src={images4} alt="photo" />
                            </div>
                            <h2 className="font-serif text-xl lg:text-3xl font-black mt-5 text-emerald-500">Темы</h2>
                            <div className="flex flex-col px-3">
                                <Link  className="font-medium text-lg text-cyan-500" to='/test'>Тест 1. Делимость натуральных чисел (24 вопроса).</Link>
                                <Link  className="font-medium text-lg text-cyan-500" to='/test'>Тест 2. Делимость натуральных чисел (24 вопроса).</Link>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </div>
    )
}

export default Tests