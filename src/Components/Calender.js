import React from 'react'
import {Link} from 'react-router-dom'

export default function Calender() {

    return (

        <Link to='/calender' className="bg-emerald-50 p-6 flex justify-center rounded">

            <h3 className="text-xl uppercase tracking-wider text-emerald-800">Full Calender</h3>
        </Link>
    )
}