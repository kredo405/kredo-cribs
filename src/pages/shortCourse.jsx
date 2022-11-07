import React from 'react'
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
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

    const tests = collection(db, "matchematicTest");

    const setDoc = async () => {
        await setDoc(doc(tests, "class6"), {
            tests: [
                {
                    title: 'Делители и кратные.',
                    questions: [
                        {
                            question: 'Какое из чисел 5, 6, 7 и 31 является делителем числа 93?',
                            answer: [
                                { answer: '7', isTrue: false },
                                { answer: '6', isTrue: false },
                                { answer: '5', isTrue: false },
                                { answer: '31', isTrue: true },
                            ]
                        },
                        {
                            question: 'Какое из чисел 2, 6, 24 и 50 является кратным числа 12?',
                            answer: [
                                { answer: '2', isTrue: false },
                                { answer: '6', isTrue: false },
                                { answer: '24', isTrue: true },
                                { answer: '50', isTrue: false },
                            ]
                        },
                        {
                            question: 'В упаковках по 7 чашек. Сколько чашек можно взять, не вскрывая упаковки?',
                            answer: [
                                { answer: '90', isTrue: false },
                                { answer: '48', isTrue: false },
                                { answer: '64', isTrue: false },
                                { answer: '56', isTrue: true },
                            ]
                        },
                        {
                            question: 'Верно ли высказывание: сумма двух натуральных чисел кратна каждому из слагаемых?',
                            answer: [
                                { answer: 'Да', isTrue: false },
                                { answer: 'Нет', isTrue: true },
                                { answer: 'Нет однозначного ответа', isTrue: false },
                            ]
                        },
                        {
                            question: 'Какое из чисел 2, 4, 6 и 34 не является делителем числа 68?',
                            answer: [
                                { answer: '6', isTrue: true },
                                { answer: '2', isTrue: false },
                                { answer: '34', isTrue: false },
                                { answer: '4', isTrue: false },
                            ]
                        },
                        {
                            question: 'Какое из чисел 6, 12, 36 и 72 является кратным числа 72?',
                            answer: [
                                { answer: '6', isTrue: false },
                                { answer: '12', isTrue: false },
                                { answer: '36', isTrue: false },
                                { answer: '72', isTrue: true },
                            ]
                        },
                        {
                            question: 'В упаковках по 8 книг. Сколько книг можно взять, не вскрывая упаковки?',
                            answer: [
                                { answer: '96', isTrue: true },
                                { answer: '29', isTrue: false },
                                { answer: '83', isTrue: false },
                                { answer: '35', isTrue: false },
                            ]
                        },
                        {
                            question: 'Верно ли высказывание: произведение двух натуральных чисел кратно каждому множителю?',
                            answer: [
                                { answer: 'Да', isTrue: true },
                                { answer: 'Нет', isTrue: false },
                                { answer: 'Нет однозначного ответа', isTrue: false },
                            ]
                        },
                    ]

                },
                {
                    title: 'Признаки делимости. Простые и составные числа.',
                    questions: [
                        {
                            question: 'Какое из чисел является делителем числа 153?',
                            answer: [
                                { answer: '0', isTrue: false },
                                { answer: '306', isTrue: false },
                                { answer: '5', isTrue: false },
                                { answer: '3', isTrue: true },
                            ]
                        },
                        {
                            question: 'Какое число является кратным числа 21?',
                            answer: [
                                { answer: '1', isTrue: false },
                                { answer: '21', isTrue: true },
                                { answer: '7', isTrue: false },
                                { answer: '3', isTrue: false },
                            ]
                        },
                        {
                            question: 'Какое из чисел делится на 5?',
                            answer: [
                                { answer: '411148', isTrue: false },
                                { answer: '121333', isTrue: false },
                                { answer: '133050', isTrue: true },
                                { answer: '555 554', isTrue: false },
                            ]
                        },
                        {
                            question: 'Какое из чисел кратно 3?',
                            answer: [
                                { answer: '15001', isTrue: false },
                                { answer: '10154', isTrue: false },
                                { answer: '10 072', isTrue: false },
                                { answer: '15003', isTrue: true },
                            ]
                        },
                        {
                            question: 'Какое из чисел является делителем числа 216?',
                            answer: [
                                { answer: '108', isTrue: true },
                                { answer: '0', isTrue: false },
                                { answer: '5', isTrue: false },
                                { answer: '7', isTrue: false },
                            ]
                        },
                        {
                            question: 'Какое из чисел является кратным числа 28?',
                            answer: [
                                { answer: '28', isTrue: true },
                                { answer: '14', isTrue: false },
                                { answer: '7', isTrue: false },
                                { answer: '1', isTrue: false },
                            ]
                        },
                        {
                            question: 'Какое из чисел делится на 2?',
                            answer: [
                                { answer: '99992', isTrue: true },
                                { answer: '222229', isTrue: false },
                                { answer: '353 535', isTrue: false },
                                { answer: '11117', isTrue: false },
                            ]
                        },
                        {
                            question: 'Какое из чисел кратно 9?',
                            answer: [
                                { answer: '7779', isTrue: false },
                                { answer: '99 991', isTrue: false },
                                { answer: '3024', isTrue: true },
                                { answer: '414113', isTrue: false },
                            ]
                        },
                    ]
                }
            ]
        });
    }
    setDoc()


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
                               Здесь пока ничего нет
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default ShortCource