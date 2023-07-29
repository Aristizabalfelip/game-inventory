import React from 'react'
import { comparation } from '../utils/condiValues'
import swordIcon from '../assets/swordIcon.png'
import rowIcon from '../assets/rowIcon.png'
import {icons} from '../utils/condiValues'

const Info = ({ select, parts }) => {
    console.log(select);
    // console.log(parts);

    return (
        <div className='border border-fuchsia-50  text-white w-[600px] '>
            <section className='bg-slate-900 p-3'>
                {select.name}
            </section>
            <section className='bg-slate-500 p-5'>
                <article className='flex gap-2'>
                    <div className='flex gap-1'>
                        <img className= 'h-[25px]' src={icons(select)} alt="" />
                        <p className='border border-orange-400 p-[2px]'>{comparation(select, parts)}</p>
                    </div>
                    <img src={rowIcon} alt="" />
                    <div>
                    <p className='border border-teal-400 p-[2px]'>{
                        select.stats ? Object.values(select.stats) : ''
                    }</p>
                    </div>
                </article>
                <p>{select.description}</p>
            </section>
        </div>
    )
}

export default Info