
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';

import '../css/SideBar.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { InputText } from 'primereact/inputtext';


const SideBar = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div className="sideBar" >
            <Sidebar visible={visibleLeft} baseZIndex='10000' position='left' style={{ 'height': '125px', 'width': '100px', 'top': '0', 'color': 'black' }} onHide={() => setVisibleLeft(false)}>
                <h4 className='side'>side3</h4>
            </Sidebar>

            <Button badgeClassName='a' icon="pi pi-arrow-right" style={{ 'fontSize': '5px' }} onClick={() => setVisibleLeft(true)} className="mr-2" >
            </Button>

            <Image src={require('../assets/img/decorlogo.PNG')} width={80} height={40} align="top" alt='decorlogo' ></Image>

            <InputText type="text" placeholder="What are you looking for ?" className="search" />

            <i className="pi pi-user"></i>

            <Tag>Hey! Log in or sign up</Tag>

            <i className="pi pi-shopping-cart"></i>
            
        </div>
    )
}
export default SideBar