import React from 'react'

import SimpleInfoBox from './SimpleInfoBox/SimpleInfoBox'
import './SimpleInfoBox/SimpleInfoBox.css'

import InfoProfile from './SimpleInfoBox/Data/InfoProfile'

const AboutMe =()=>{
    return (
    <div className='Profile-Container'>
        <div className='Foto'>
            <img className='FotoEric' src='./Foto.jpg' width='480' />
        </div>

        <div>
            <div  className='titulo'>
                <h1 className='whoiam'>WHO I AM? WHAT ARE MY SKILLS?</h1>             
                <a className='myCV-download' href='#'>DOWNLOAD MY CV !</a>
            </div>

            <div className='whoiam-container'>
                {InfoProfile.map(InfoBox => <SimpleInfoBox key={InfoBox.id} img={InfoBox.img} text={InfoBox.text} InfoBox={InfoBox}/>)}
            </div>
        </div>
    </div>
    )
}

export default AboutMe
