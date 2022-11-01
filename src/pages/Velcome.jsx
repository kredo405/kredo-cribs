import React from 'react'
import main from '../img/main.png'
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react'

const Velcome = () => {
    return (
        <div className='container flex justify-center'>
            <div className="flex flex-col lg:flex-row lg:justify-around">
                <div className="flex justify-center">
                    <img
                        className="object-cover"
                        src={main}
                        alt="fon"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="sm:text-center lg:text-left mt-5">
                        <h1 className="text-3xl text-center lg:text-start font-extrabold text-gray-900 md:text-4xl">
                            <span className="block xl:inline">Шпаргалки</span>{' '}
                            <span className="block text-indigo-600 xl:inline">для школьников</span>
                        </h1>
                        <p className="mt-3 font-mono text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 px-3">
                            Сложности с школьной программой? А домашних заданий с каждым днем всё больше…
                            Если это так, то шпаргалки и онлайн-тренажеры станут для вас отличным помощником. Школьные предметы разделены на отдельные темы.
                        </p>
                        <div className="mt-8 px-2 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link
                                    to="/main"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 mt-3"
                                >
                                    Учиться
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Velcome