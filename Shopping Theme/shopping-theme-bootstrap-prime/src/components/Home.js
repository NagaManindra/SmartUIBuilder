import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

import '../css/Home.css';

function Home(props) {
    const product = [{
        name : "Decorative candle",
        image : "decor.jpg",
        inventoryStatus : "INSTOCK"
    },
    {
        name : "Cushion",
        image : "cushion.avif",
        inventoryStatus : "INSTOCK"
    },
    {
        name : "Plants & Flowers",
        image : "plants&flowers.avif",
        inventoryStatus : "INSTOCK"
    },
    {
        name : "BedSheets",
        image : "BedSheets.avif",
        inventoryStatus : "INSTOCK"
    },
    {
        name : "Serve ware",
        image : "serve-ware.avif",
        inventoryStatus : "INSTOCK"
    },
    {
        name : "Candle",
        image : "candle.avif",
        inventoryStatus : "INSTOCK"
    }]
    const furniture = [
        {
            name : "Sofas in Furniture",
            image : "sofa1.avif",
            inventoryStatus : "INSTOCK"
        },
        {
            name : "Storage",
            image : "storage.avif",
            inventoryStatus : "INSTOCK"
        },
        {
            name : "Table & Desks",
            image : "table and desks.avif",
            inventoryStatus : "INSTOCK"
        },
        {
            name : "Curtains",
            image : "curtains.avif",
            inventoryStatus : "INSTOCK"
        },
        {
            name : "Chair",
            image : "chair.png",
            inventoryStatus : "INSTOCK"
        },
        {
            name : "Beds",
            image : "beds.avif",
            inventoryStatus : "INSTOCK"
        }
    ];
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <div class="product-item" style={{'padding-left':"2rem"}}>
                <div class="product-item-content" >
                    <div class="p-mb-3">
                    </div>
                    <div>
                        <h4 class="p-mb-1">{product.name}</h4>
                        <img style={{'height':'250px', 'width':'250px'}} src={require(`../assets/img/${product.image}`)} alt={product.name}/>
                        <span class="'product-badge status-'+product.inventoryStatus.toLowerCase()">{product.inventoryStatus}</span>
                        <div class="car-buttons p-mt-5">
                            <Tag class="product-tag" style={{'margin-left':'0px', 'font-size':'14px', 'background-color':'cadetblue'}}>{product.name} starting at Rs 199
                            </Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const furnitureTemplate = (furniture) => {
        return (
            <div class="product-item" style={{'padding-left':"2rem"}}>
                <div class="product-item-content" >
                    <div class="p-mb-3">
                    </div>
                    <div>
                        <h4 class="p-mb-1">{furniture.name}</h4>
                        <img style={{'height':'250px', 'width':'250px'}} src={require(`../assets/img/${furniture.image}`)} alt={furniture.name}/>
                        <span class="'product-badge status-'+product.inventoryStatus.toLowerCase()">{furniture.inventoryStatus}</span>
                        <div class="car-buttons p-mt-5">
                            <Tag class="product-tag" style={{'margin-left':'0px', 'font-size':'14px', 'background-color':'#dfc087'}}>{furniture.name} starting at Rs 199
                            </Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="carousel-demo">
                <div className="card">
                    <Carousel value={product} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate} header={<h3 style={{'padding-left':"2rem"}}>Go affordable this festive season</h3>} />
                </div>
            </div>
            <div className="carousel-demo">
                <div className="card">
                    <Carousel value={furniture} numVisible={4} numScroll={4} circular='false' responsiveOptions={responsiveOptions}
                        itemTemplate={furnitureTemplate} header={<h3 style={{'padding-left':"2rem"}}>Top furniture categories</h3>} />
                </div>
            </div>
        </div>
    );
}

export default Home;