import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Fireworks } from '@fireworks-js/react'


const FinishTest = () => {
    const state = useSelector(state => state)
    const history = useNavigate();

    const style = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -1
    };

    return (
        <>
            <div className="flex h-80">
            <Fireworks
                options={{
                    rocketsPoint: {
                        min: 0,
                        max: 100
                    }
                }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '30%',
                    position: 'fixed',
                    background: '#fff'
                }}
            />
            </div>

           <div className="flex flex-col justify-center h-80 px-3">
           <div className="flex justify-center mb-5">
                <h1 className="font-mono text-4xl font-bold text-sky-900">Тест завершён</h1>
            </div>
            <div className="flex justify-center">
                <p className="text-center font-mono text-xl font-medium text-amber-800">Вы ответили правильно на {state.finishTest.isTrue} из {state.finishTest.questions} вопросов</p>
            </div>
            <div className="flex justify-center">
                <img src="https://abrakadabra.fun/uploads/posts/2021-12/1639922537_1-abrakadabra-fun-p-risunok-chelovechka-dlya-prezentatsii-1.jpg" alt="people" />
            </div>
           </div>
        </>
    )
}

export default FinishTest