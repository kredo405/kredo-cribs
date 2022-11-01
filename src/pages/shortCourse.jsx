import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import images4 from '../img/images6.png'


const ShortCource = () => {
    const state = useSelector(state => state)
    const db = state.db
    const [data, setData] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [html, setHtml] = useState('')

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "mathematics"));
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setData(doc.data().howClass)
                if (state.subject.name === 'Математика') {
                    if (state.subject.class === '6') {
                        setTitle(doc.data().howClass.sixClass.shortCourcess.text.title)
                        const content = doc.data().howClass.sixClass.shortCourcess.text.content.map((el, i) => {
                            return (
                                <a key={i} className="font-medium text-lg text-cyan-500" href={`#${i + 1}`}>{el}</a>
                            )
                        })
                        setContent(content)

                        const html = doc.data().howClass.sixClass.shortCourcess.text.html.map((el, i) => {
                            const elements = el.text.map((item, i) => {
                                if (item.img === null && item.list === null) {
                                    return (
                                        <li className='py-3' key={i}>
                                            <p className='font-sans text-base font-medium tracking-wide text-black'>
                                                <b>{i + 1}.</b> {item.text}
                                            </p>
                                        </li>
                                    )
                                }
                                if (item.img !== null && item.list === null) {
                                    return (
                                        <li className='py-3' key={i}>
                                            <p className='font-sans text-base font-medium tracking-wide text-black'>
                                                <b>{i + 1}.</b> {item.text}
                                            </p>
                                            <div className='flex justify-center'>
                                                <img src={item.img} alt="formula" />
                                            </div>
                                        </li>
                                    )
                                }
                                if (item.img === null && item.list !== null) {
                                    const items = item.list.map((elem, i) => {
                                        return (
                                            <li key={i}>{elem}</li>
                                        )
                                    })

                                    return (
                                        <li className='py-3' key={i}>
                                            <p className='font-sans text-base font-medium tracking-wide text-black'>
                                                <b>{i + 1}.</b> {item.text}
                                            </p>
                                            <ul className='list-disc'>
                                                {items}
                                            </ul>
                                        </li>
                                    )
                                }
                            })


                            return (
                                <div id={i + 1} key={i}>
                                    <h2 className='font-serif text-xl lg:text-3xl font-black mt-5 text-emerald-900 text-center'>
                                        {el.title}
                                    </h2>
                                    <ul key={i} className='px-5 md:px-10 lg:px-24'>
                                        {elements}
                                    </ul>
                                </div>
                            )
                        })

                        setHtml(html)
                    }
                }
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
                            <h1 className="font-serif text-2xl lg:text-4xl font-black text-emerald-700 text-center">{state.subject.name} {state.subject.class} класс</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center mt-5">
                                <img src={images4} alt="photo" />
                            </div>
                            <h2 className="font-serif text-xl lg:text-3xl font-black mt-5 text-emerald-500">Содержание</h2>
                            <div className="flex flex-col">
                                {content}
                            </div>
                        </div>
                        {html}
                    </>
                    :
                    null
            }
        </div>
    )
}

export default ShortCource