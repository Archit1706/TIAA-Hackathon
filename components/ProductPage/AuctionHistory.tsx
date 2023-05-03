import React from "react";

type Props = {
    bidHistory: [
        {
            name: string;
            email: string;
            bid: number;
            time: string;
        }
    ];
};

const AuctionHistory = ({ bidHistory }: Props) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 max-w-[100vw]">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800 text-xl">
                    Bid History
                </h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto max-h-[400px]">
                    <table className="table-auto w-full">
                        <thead className="sticky top-0 text-base font-medium uppercase text-mobile bg-mobile-light">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-medium text-left">
                                        Name
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-medium text-left">
                                        Email
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Spent
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                            {bidHistory?.map((bid: any, index: number) => {
                                return (
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                    <img
                                                        className="rounded-full"
                                                        src={`https://avatars.dicebear.com/api/initials/${bid?.name}.svg`}
                                                        width={40}
                                                        height={40}
                                                        alt="Alex Shatov"
                                                    />
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    {bid?.name}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">
                                                {bid?.email}
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-mobile">
                                                {bid?.bid}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                                width={40}
                                                height={40}
                                                alt="Philip Harbach"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Philip Harbach
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">
                                        philip.h@gmail.com
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-mobile">
                                        $2,767.04
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                                width={40}
                                                height={40}
                                                alt="Mirko Fisuk"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Mirko Fisuk
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">
                                        mirkofisuk@gmail.com
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-mobile">
                                        $2,996.00
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                                width={40}
                                                height={40}
                                                alt="Olga Semklo"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Olga Semklo
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">
                                        olga.s@cool.design
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-mobile">
                                        $1,220.66
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img
                                                className="rounded-full"
                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                                width={40}
                                                height={40}
                                                alt="Burak Long"
                                            />
                                        </div>
                                        <div className="font-medium text-gray-800">
                                            Burak Long
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">
                                        longburak@gmail.com
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-mobile">
                                        $1,890.66
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AuctionHistory;
