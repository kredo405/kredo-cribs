import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Fireworks } from '@fireworks-js/react'
import { Link } from "react-router-dom";


const FinishProfTest = () => {
    const state = useSelector(state => state)
    const history = useNavigate();

    const professions = state.profTest.map(el => {
        return (
            <p className="font-bold text-emerald-700">
                {el}
            </p>
        )
    })

    return (
        <>
            <div className="flex h-80">
                <Fireworks
                    options={{
                        rocketsPoint: {
                            min: 0,
                            max: 100
                        },
                    }}
                    style={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        background: '#fff',
                        opacity: 0.3
                    }}
                />
            </div>

            <div className="flex flex-col justify-center h-80 px-3">
                <div className="flex justify-center mb-5">
                    <h1 className="font-mono text-4xl font-bold text-sky-900">Тест завершён</h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-center font-mono text-xl font-medium text-amber-800">Профессии которые вам подходят: {professions}</p>
                </div>
                <div className="flex justify-center">
                    <img src="https://abrakadabra.fun/uploads/posts/2021-12/1639922537_1-abrakadabra-fun-p-risunok-chelovechka-dlya-prezentatsii-1.jpg" alt="people" />
                </div>
                <div className="flex justify-center mb-5">
                    <div className="rounded-md shadow">
                        <Link
                            to="/"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 mt-3"
                        >
                            На главную
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FinishProfTest