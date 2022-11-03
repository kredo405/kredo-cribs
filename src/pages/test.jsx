import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { BackTop } from 'antd';



const Test = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const history = useNavigate();
    const db = state.db
    const [data, setData] = useState('gsg')
    const [value, setValue] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [question, setQuestion] = useState(0);
    const [isTrue, setIsTrue] = useState(0);


    const arr = [
        {
            question: '1. В какой паре чисел первое число является делителем второго?',
            answer: [
                { isTrue: false, answer: '8 и 10' },
                { isTrue: false, answer: '7 и 10' },
                { isTrue: true, answer: '9 и 10' },
                { isTrue: false, answer: '6 и 10' },
            ]
        },
        {
            question: '1. В какойdsgdsgsdgsd dsg g sdg dsg sd d s ?',
            answer: [
                { isTrue: true, answer: '8 и 10sdg s' },
                { isTrue: false, answer: '7 и 1sdg ds0' },
                { isTrue: false, answer: '9 sdg dsg и 10' },
                { isTrue: false, answer: '6 sdssdgи 10' },
            ]
        },
        {
            question: '1. В кsd gsdак ойd sdg  sgds gsdgsdgsdgsdg d sg g sdg dsg sd d s ?',
            answer: [
                { isTrue: false, answer: '8 и 10sdg s' },
                { isTrue: false, answer: '7sd g  sdgи 1sdg ds0' },
                { isTrue: false, answer: '9 s dgsdg sdg dsg и 10' },
                { isTrue: true, answer: '6 s dgsdssdgи 10' },
            ]
        },
    ]

    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
        arr[question].answer.forEach(el => {
            if (el.isTrue) {
                setCorrectAnswer(el.answer)
            }
        })
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if (value === correctAnswer) {
            dispatch({
                type: 'FINISHTEST',
                payload: {
                    questions: arrMap.length,
                    isTrue: isTrue + 1,
                }
            })
            
            setIsTrue(isTrue + 1)
        }
        
        if (arrMap.length > question + 1) {
            setQuestion(question + 1)
        } else {
            history('/finishTest')
        }

       
    }

    console.log(`Верно ${isTrue}`)

    const arrMap = arr.map((el, index) => {
        const radioButtons = el.answer.map((Item, i) => {
            return (
                <div className='flex items-center py-3' key={i}>
                    <input className='w-7 h-7 mr-5' onChange={onChange} type="radio" name={`answer${index}`} value={Item.answer} id={i} />
                    <label className='font-mono text-lg text-blue-600' htmlFor={i}>{Item.answer}</label>
                </div>
            )
        })
        return (
            <div key={index}>
                <div className="flex px-3 mt-5">
                    <p className='font-mono text-lg font-medium tracking-wide'>{el.question}</p>
                </div>
                <form
                    onSubmit={onSubmit}
                    required
                    className="px-3 w-full mt-3"
                >
                    <div className="flex flex-col items-start">
                        {radioButtons}
                    </div>
                    <div className="flex justify-center mt-5">
                        <button
                            type='submit'
                            className='px-20 py-3 bg-teal-400 text-white font-mono text-xl font-bold rounded-md border-2 border-teal-700 border-solid'
                        >
                            Далее
                        </button>
                    </div>
                </form>
            </div>
        )
    })



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
                        <div className="flex flex-col justify-center items-center md:px-40">
                            <div className="flex justify-center mt-5">
                                <img src='https://papik.pro/uploads/posts/2021-12/thumbs/1639280833_9-papik-pro-p-menedzher-klipart-9.jpg' alt="photo" />
                            </div>
                            {arrMap[question]}
                        </div>
                    </>
                    :
                    null
            }
        </div>
    )
}

export default Test