import React from 'react';
import { Toolbar } from 'primereact/toolbar';

import '../css/OfferTab.css'

function OfferTab(props) {
    const contant = (
        <React.Fragment>
                    <a href="https://google.com" style={{"color": 'white', 'margin-left': "25rem"}}>Get 20% off* on delivery charges - limited period offer! </a>
        </React.Fragment>
    )
    return (
        <div className="offerTab">
            <Toolbar left={contant}>        
            </Toolbar>
        </div>
    );
}

export default OfferTab;