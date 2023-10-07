import React from 'react'
import Pick from '../Images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'

export default function QuickDetails() {
  return (
    <div className='quickdetails'>
        <img src={Pick}/>
        <h1>Laura Smith</h1>
        <h3>Frontend Developer</h3>
        <p>laurasmith.website</p>

        <table>
            <th className='btn'>
                <tr><button className='email'><i class="fa-solid fa-envelope"></i> Email</button></tr>
                <tr><button className='linkedin'><i class="fa-brands fa-linkedin"></i> LinkedIn</button></tr>
            </th>
        </table>

        <div className='btn'>
        
        
        </div>
    </div>
  )
}
