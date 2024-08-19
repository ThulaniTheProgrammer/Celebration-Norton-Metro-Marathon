import React from 'react'

export default function Banking() {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-900">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-3xl font-bold mb-4">Banking Details!</h1>
                <p className="text-gray-700">Account Name: Celebration Church Norton</p>
                <p className="text-gray-700">Account Number: 66961190610042 - USD</p>
                <p className="text-gray-700">BRANCH: Norton</p>
                <p className="text-gray-700"><b>Ecocash: *151*2*1*37296*AMT*66961190610042# - USD </b></p>
                <p className="text-gray-700">For cash payments  <b>0774521028</b></p>
            </div>
        </div>
    )
}

