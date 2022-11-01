import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Subject = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const history = useNavigate();

    const onClick = (e) => {
        history('/pagesubject')
        dispatch({
            type: 'SUB',
            payload: {
                name: e.target.innerText,
                class: props.howClass,
            }
        })
    }

    return (
        <div 
            onClick={onClick}
            className="flex mb-3 justify-start p-2 md:h-16 items-center border-2 rounded-lg border-solid border-emerald-100"
        >
            <div>
                <img
                    className='h-12 md:h-14'
                    src={props.img} alt="logo"
                />
            </div>
            <div className="px-5 lg:px-14">
                <h2 className="font-mono text-xl lg:text-4xl italic font-semibold text-blue-500">{props.name}</h2>
            </div>
        </div>
    )
}

export default Subject