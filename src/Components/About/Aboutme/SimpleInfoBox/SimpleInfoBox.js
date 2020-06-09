import React from 'react'


const SimpleInfoBox = ({InfoBox}) => {

    const {image, text} = InfoBox

    return (
            <div>
                <div>
                    <img className='icon-skill' src={image} alt=''></img>
                    <p>{text}</p>     
                </div>
            </div>    
    )
}
export default SimpleInfoBox
