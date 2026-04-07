import React from "react";
import { Check, Minus } from "lucide-react";

const data = [
    { feature: "New customer acquisition", web: true, app: true },
    { feature: "SIM activation", web: true, app: true },
    { feature: "Account self-service", web: true, app: true },
    { feature: "Push notifications", web: false, app: true },
    { feature: "On-the-go team access", web: false, app: true },
    { feature: "SEO & organic traffic", web: true, app: false },
    { feature: "App Store presence", web: false, app: true },
];

const Icon = ({ value }) =>
    value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
    );

const MobileTable = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">

            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="secondary-heading">
                    Why They Work Better Together
                </h2>
                <p className="para1">
                    Combine web + mobile for maximum growth
                </p>
            </div>

            {/* Table Wrapper */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full">

                    {/* Head */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                Features
                            </th>
                            <th className="text-center px-6 py-4 text-sm font-semibold text-gray-900">
                                Retail Website
                            </th>
                            <th className="text-center px-6 py-4 text-sm font-semibold text-gray-900">
                                Mobile App
                            </th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-300 hover:bg-gray-50 transition duration-200"
                            >
                                <td className="px-6 py-4 text-gray-700 text-sm">
                                    {row.feature}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    <Icon value={row.web} />
                                </td>

                                <td className="px-6 py-4 text-center">
                                    <Icon value={row.app} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-8">
                <p className="text-lg font-semibold text-gray-900">
                    Both channels. One platform.
                </p>
                <p className="text-gray-500">
                    No double management.
                </p>
            </div>
        </div>
    );
};

export default MobileTable;