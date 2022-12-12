import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import '../css/NavBar.css';

function NavBar(props) {
    return (
        <div classname='navBar'>
            <TabView>
                <TabPanel header="Products">
                </TabPanel>
                <TabPanel header="Rooms">
                </TabPanel>
                <TabPanel header="New at Decor">
                </TabPanel>
                <TabPanel header="Offers">
                </TabPanel>
            </TabView>
        </div>
    );
}

export default NavBar;