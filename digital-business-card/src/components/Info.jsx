import React from 'react'
import photo from '../assets/images/Photo.png'
import { GrMail } from 'react-icons/gr'

export default function Info() {
    return (
        <div className='info'>
            <img src={photo} alt='Photo showing a person' className='info--photo'/>
            <h1 className='info--name'>Laura Smith</h1>
            <p className='info--profession'>Frontend Developer</p>
            <small className='info--website'>laurasmith.website</small>
            <button className='info--btn'><GrMail /> Email</button>
        </div>
    )
}