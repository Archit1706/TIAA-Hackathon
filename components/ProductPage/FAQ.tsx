"use client"
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

type Props = {}

const FAQ = (props: Props) => {
    const [answer, setAnswer] = useState("")
    const QnA = [
        {
            "name": "Olivia",
            "comment": "Does this laptop have a fingerprint reader?",
            "response": "Yes, the Lenovo IdeaPad 3 has a fingerprint reader."
        },
        {
            "name": "Peter",
            "comment": "What is the graphics card of this laptop?",
            "response": "The Lenovo IdeaPad 3 has an NVIDIA GeForce MX330 graphics card."
        },
        {
            "name": "Admin",
            "comment": "Does this laptop have a fingerprint reader?",
            "response": ""
        },
        {
            "name": "Peter",
            "comment": "What is the graphics card of this laptop?",
            "response": "The Lenovo IdeaPad 3 has an NVIDIA GeForce MX330 graphics card."
        },
        {
            "name": "Peter",
            "comment": "What is the graphics card of this laptop?",
            "response": "The Lenovo IdeaPad 3 has an NVIDIA GeForce MX330 graphics card."
        },
        {
            "name": "Admin",
            "comment": "Does this laptop have a fingerprint reader?",
            "response": ""
        },
        {
            "name": "Peter",
            "comment": "What is the graphics card of this laptop?",
            "response": "The Lenovo IdeaPad 3 has an NVIDIA GeForce MX330 graphics card."
        }
    ]
    const submitAnswer = (item: any, index: any) => {
        if (answer.length > 0) {
            // submit answer to backend
            const body = {
                "prod_id": "123",
                "name": "Admin",
                "comment": item?.comment,
                "response": answer
            }
            fetch("https://auction-backend.sidd065.repl.co/api/product/answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data["status"] === "success") {
                        toast.success("Answer submitted successfully!")
                        QnA[index].response = answer
                        setAnswer("")
                    } else {
                        toast.error("Unable to submit answer!")
                    }
                })
                .catch(err => {
                    toast.error("Unable to submit answer!")
                    console.log(err)
                })

            // update QnA
        } else {
            toast.error("Please enter a valid answer!")
        }
    }
    return (
        <div className="max-h-[70vh] overflow-auto w-full md:w-2/3 mx-auto px-5 pb-5 bg-white rounded-lg shadow-sm font-body">
            <ToastContainer />
            <div className="flex items-center justify-between sticky top-0 bg-white w-full p-4 shadow-sm">

                <h2 className="section-heading">Questions and Answer</h2>
                {/* <div className="relative w-1/3 flex justify-end items-center space-x-1">
                    <div className="prev-item flex items-center justify-center w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer">
                        <svg
                            className="w-auto h-3 fill-current text-primary-black"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                        >
                            <path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
                        </svg>
                    </div>
                    <div className="next-item flex items-center justify-center w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer">
                        <svg
                            className="w-auto h-3 fill-current text-primary-black"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                        >
                            <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
                        </svg>
                    </div>
                </div> */}
            </div>
            <div className="mt-8 space-y-8">
                {
                    QnA.map((item, index) => (
                        <div>
                            <div className="flex items-start">
                                <div>
                                    <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
                                        Q
                                    </span>
                                </div>
                                <p className="ml-4 md:ml-6">
                                    {item?.comment}
                                </p>
                            </div>
                            <div className="flex items-start mt-3">
                                <div>
                                    <span className="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                                        A
                                    </span>
                                </div>
                                {
                                    item?.response && item?.response != "" ? (
                                        <p className="ml-4 md:ml-6">
                                            {item?.response}
                                        </p>
                                    ) : (
                                        item?.name === "Admin" ? (
                                            <div className='flex space-x-2 items-end ml-4 md:ml-6 w-full'>
                                                <textarea
                                                    onChange={(e) => setAnswer(e.target.value)}
                                                    value={answer}
                                                    rows={5}
                                                    name="bid" id="bid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your response..." required />
                                                <button
                                                    onClick={() => { submitAnswer(item, index) }}
                                                    className="ml-4 md:ml-6 text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile-light bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Respond</button>
                                            </div>
                                        ) : (
                                            <p className="ml-4 md:ml-6 text-gray-700 italic">
                                                No response yet
                                            </p>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default FAQ