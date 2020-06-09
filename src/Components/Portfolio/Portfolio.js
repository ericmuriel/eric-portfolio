import React from 'react'

import './Portfolio.css'

import containerPortfolio from './ContainerPortfolio/containerPortfolio'
import './ContainerPortfolio/containerPortfolio.css'

import DataPortfolio from './ContainerPortfolio/Data/DataPortfolio'


const Portfolio = () => {
    return (
        <div>
            <div className='Portfolio'>
                <h1 className='titlePortfolio'>PORTFOLIO</h1>
            </div>
            
            <div className='container-info'>
                <div className='boxPortfolioinfo'>
                    <div className='expoPortfolio'>
                        
                        {DataPortfolio.map(props => <containerPortfolio key={props.id} image={props.image } url={props.url}/>)}
                        
                    </div>                                                                         
                </div>
            </div>
                                  
      </div>    
    )
}

export default Portfolio
