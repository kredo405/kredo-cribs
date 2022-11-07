import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import images from '../img/images2.jpg'

const PageSubject = () => {
    const state = useSelector(state => state)

    let subjects;
    if (+state.subject.class <= 5) {
        subjects = <NavLink to="/tests" className="p-5 rounded-lg border-4 border-sky-200 border-double mt-3">
            <span className="font-mono text-center text-xl font-medium text-purple-900">Онлайн-тесты</span>
        </NavLink>
    }
    if (+state.subject.class > 5) {
        subjects = <>
            <NavLink to="/shortCource" className="p-5 rounded-lg border-4 border-sky-200 border-double mt-3">
                <span className="font-mono text-center text-xl font-medium text-purple-900">Краткий курс</span>
            </NavLink>
            <NavLink to="/tests" className="p-5 rounded-lg border-4 border-sky-200 border-double mt-3">
                <span className="font-mono text-center text-xl font-medium text-purple-900">Онлайн-тесты</span>
            </NavLink>
        </>
    }

    return (
        <div className="container">
            <div>
                <div className="flex justify-center mt-3">
                    <h1 className="font-serif text-2xl lg:text-4xl font-black text-emerald-700">{state.subject.name} {state.subject.class} Класс</h1>
                </div>
                <div className="flex justify-center mt-5">
                    <img src={images} alt="photo" />
                </div>
            </div>
            <div className="flex flex-col justify-center mt-10 p-5 md:px-40">
                {subjects}
            </div>
        </div>
    )
}

export default PageSubject