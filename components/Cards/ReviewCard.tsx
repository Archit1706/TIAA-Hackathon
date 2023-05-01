import React from 'react'
import TempImg from "../../src/assets/img/temp.jpg"
type Props = {}

const ReviewCard = (props: Props) => {
    return (
        <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden max-w-[350px] rounded-md">
            <div className="pt-3 pb-3 md:pb-1 px-4 md:px-8 bg-white bg-opacity-40">
                <div className="flex flex-wrap items-center">
                    <img
                        className="mr-6 w-10 h-10 rounded-full"
                        src={TempImg.src}
                        alt=""
                    />
                    <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                        Faustina H. Fawn
                    </h4>
                </div>
            </div>
            <div className="px-4 overflow-hidden md:px-8 pt-4 pb-4 bg-white flex flex-col space-y-2">
                <div className="w-full">
                    <p className="text-sm text-gray-300 w-full">Added 2 months ago</p>
                </div>
                <p className="max-w-2xl text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum molestie.
                    Vestibulum suscipit sagittis dignissim mauris.
                </p>
            </div>
            <div className='px-4 md:px-8 pt-4 pb-4 bg-white flex flex-row space-x-2'>
                <span className="mr-4 text-xl font-heading font-medium">5.0</span>
                <div className="inline-flex">
                    <a className="inline-block mr-1" href="#">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                                fill="#FFCB00"
                            />
                        </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                                fill="#FFCB00"
                            />
                        </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                                fill="#FFCB00"
                            />
                        </svg>
                    </a>
                    <a className="inline-block mr-1" href="#">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                                fill="#FFCB00"
                            />
                        </svg>
                    </a>
                    <a className="inline-block text-gray-200" href="#">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                                fill="#FFCB00"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard