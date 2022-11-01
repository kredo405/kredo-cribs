import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import { Radio, Alert, Button } from 'antd';


const Test = () => {
    const state = useSelector(state => state)
    const db = state.db
    const [data, setData] = useState('gsg')
    const [value, setValue] = useState('');

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "mathematics"));
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
            });
        }

        getData()
    }, [])

    const success = <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
    />
    const error = <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
    />



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
                                <img src='https://st.depositphotos.com/1345122/3678/i/600/depositphotos_36784709-stock-photo-business-woman.jpg' alt="photo" />
                            </div>
                            <div className="flex px-3">
                                <p className='font-mono text-lg font-medium tracking-wide'>1. В какой паре чисел первое число является делителем второго?</p>
                            </div>
                            <div className="px-3 w-full mt-3">
                                <Radio.Group size='large' onChange={onChange} value={value}>
                                    <Radio value={1}> 8 и 84</Radio>
                                    <br />
                                    <Radio value={2}> 9 и 54</Radio>
                                    <br />
                                    <Radio value={3}> 8 и 36</Radio>
                                    <br />
                                    <Radio value={4}>6 и 56</Radio>
                                </Radio.Group>
                                <div className="flex justify-center mt-5">
                                    <button className='px-20 py-3 bg-teal-400 text-white font-mono text-xl font-bold rounded-md border-2 border-teal-700 border-solid'>
                                        Далее
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </div>
    )
}

export default Test