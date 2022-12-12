import React from 'react';
import { Image } from 'primereact/image';
import '../css/AdTab.css'

function AdTab(props) {
    return (
        <div className='image'>
            <Image src={require('../assets/img/limited-time-offer landing page.avif')} width='93%' style={{margin:'50px'}} alt="offer display"></Image>
        </div>
    );
}

export default AdTab;