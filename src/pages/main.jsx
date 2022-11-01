import React from 'react'
import people2 from '../img/people2.jpg'
import people from '../img/people.jpg'
import Subject from '../components/Subject';
import { Select } from 'antd';
import { useState, useEffect } from 'react';
import math from '../img/math.png'
import flask from '../img/flask.png'
import radium from '../img/radium.png'
import russia from '../img/russia.png'
import uk from '../img/uk.png'


const { Option } = Select;

const Main = () => {
    const [howClass, setHowClass] = useState('')
    const [subjectShow, setSubjectShow] = useState(false)

    const onSelect = (value) => {
        setHowClass(value)
        setSubjectShow(true)
    }

    return (
        <div className='container px-20'>
            {subjectShow ?
                <div>
                    <div className="flex justify-center mt-20">
                        <img
                            className="lg:w-4/12 object-cover"
                            src={people2}
                            alt="fon"
                        />
                    </div>
                    <h1 className='font-mono text-2xl font-bold text-neutral-900 text-center '>Выбери предмет</h1>
                </div>
                :
                <div>
                    <div className="flex justify-center my-10">
                        <img
                            className="lg:w-4/12 object-cover"
                            src={people}
                            alt="fon"
                        />
                    </div>
                    <h1 className='font-mono text-2xl font-bold text-neutral-900 text-center '>Привет, В каком классе ты учишься?</h1>
                    <div className='flex justify-center mt-5'>
                        <Select
                            showSearch
                            onSelect={onSelect}
                            style={{
                                width: 300,
                            }}
                            placeholder="Выбери Класс"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.includes(input)}
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">1 Класс</Option>
                            <Option value="2">2 Класс</Option>
                            <Option value="3">3 Класс</Option>
                            <Option value="4">4 Класс</Option>
                            <Option value="5">5 Класс</Option>
                            <Option value="6">6 Класс</Option>
                            <Option value="7">7 Класс</Option>
                            <Option value="8">8 Класс</Option>
                            <Option value="9">9 Класс</Option>
                        </Select>
                    </div>
                </div>
            }
            <div>
                {subjectShow ?
                    <div className='mt-5'>
                        <Subject name='Математика' howClass={howClass} img={math} />
                        <Subject name='Физика' howClass={howClass} img={radium} />
                        <Subject name='Химия' howClass={howClass} img={flask} />
                        <Subject name='Русский язык' howClass={howClass} img={russia} />
                        <Subject name='Английский язык' howClass={howClass} img={uk} />
                    </div>
                    :
                    null}

            </div>
        </div>
    )
}

export default Main