import React from 'react'
import { ImPointRight } from 'react-icons/im'
type Props = {}

const Specs = (props: Props) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 max-w-[100vw]">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Specs</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto max-h-[400px]">
                    <table className="table-auto w-full">
                        <thead className="sticky top-0 text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Property</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Value</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex items-center justify-center">
                                            <ImPointRight className='w-6 h-6 text-blue-500' />
                                        </div>
                                        <div className="font-medium text-gray-800">Alex Shatov</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        $2,890.66
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex items-center justify-center">
                                            <ImPointRight className='w-6 h-6 text-blue-500' />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Philip Harbach
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        $2,767.04
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex items-center justify-center">
                                            <ImPointRight className='w-6 h-6 text-blue-500' />
                                        </div>
                                        <div className="font-medium text-gray-800">Mirko Fisuk</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        $2,996.00
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex items-center justify-center">
                                            <ImPointRight className='w-6 h-6 text-blue-500' />
                                        </div>
                                        <div className="font-medium text-gray-800">Olga Semklo</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        $1,220.66
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex items-center justify-center">
                                            <ImPointRight className='w-6 h-6 text-blue-500' />
                                        </div>
                                        <div className="font-medium text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">
                                        $1,890.66
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Specs