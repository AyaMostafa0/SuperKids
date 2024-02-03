import { useState } from 'react';
import { productsData } from '../utils/data'
import ProductCard from "../components/products/ProductCard";
import Filter from '../components/products/Filter';
import '../css/Products.css'


function Products(props) {

    // Filter States
    const [brand, setBrand] = useState('All Brands');
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(10000);
    const [category, setCategory] = useState('All Categories');
    const [starsFrom, setStarsFrom] = useState(3);
    const [starsTo, setStarsTo] = useState(5);
    const [tag, setTag] = useState('All Tags');
    const [order, setOrder] = useState('No Order');
    
    // Filter Methods
    const checkIf = (obj={}, target='', content=[]) => {
        var found = true;

        if (content[0].toLowerCase().slice(0, 3) == 'all' || content == undefined || content.length == 0) 
            return true;

        for(var i=0; i<content.length; i++){
            found = obj[target].includes(content[i]);
            if (!found) return false;
        }

        return true;
    }

    const checkRange = (obj={}, target='', range=[]) => {
        return (obj[target] >= range[0] && obj[target] <= range[1]);
    }

    // Helper Methods for Collecting Data from data list
    const catchProp = (dataList=[{}], target='') => {
        var targetData = [];
        for(var i=0; i<dataList.length; i++){
            targetData.push(dataList[i][target]);
        }
        return targetData;
    }
    const catchObj = (dataList=[{}], target='', value='') => {
        var targetData = [];
        for(var i=0; i<dataList.length; i++){
            if(dataList[i][target] == value) targetData.push(dataList[i]);
        }
        return targetData;
    }

    // Apply all types of orders to the data list according to 'order state'
    const confirmOrder = (dataList=[], orderType='') => {
        var targetName = '';
        var targetData = [];
        var orderedData = [];
        var objects = {};
        
        if(orderType == 'No Order') return dataList;
        
        if(orderType == 'alphabetical'){
            targetName = 'name';
            targetData = catchProp(dataList, targetName).sort();
        }

        if(orderType == 'prices (low to high)' || orderType == 'prices (high to low)'){
            targetName = 'price_usd';
            targetData = catchProp(dataList, targetName);
            targetData.sort((a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            });
            if(orderType == 'prices (high to low)') targetData.reverse();
        }

        for(var i=0; i<targetData.length; i++){
            objects = catchObj(dataList, targetName, targetData[i]);
            for(var j=0; j<objects.length; j++){
                orderedData.push(objects[j]);
            }
        }

        return orderedData;
    }

  
    
    return (
        <section className="products bg-light py-5">
            <div className="heading w-100 bg-light">
                <div className="container">
                    <h1 className="">Products</h1>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4">

                    <div className="col-12">
                        <Filter setBrand={setBrand} setCategory={setCategory} priceFrom={priceFrom}
                        priceTo={priceTo} setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} 
                        setStarsFrom={setStarsFrom} setStarsTo={setStarsTo}
                        starsFrom={starsFrom} starsTo={starsTo} setTag={setTag} setOrder={setOrder} />
                    </div>
                    {/* Handling Display Products With Filters */}
                    {confirmOrder(productsData, order).map((product, i)=>(
                        (checkIf(product, 'brand', [brand]) &&
                        checkIf(product, 'categories', [category]) &&
                        checkIf(product, 'tags', [tag]) &&
                        checkRange(product, 'stars', [starsFrom, starsTo]) &&
                        checkRange(product, 'price_usd', [priceFrom, priceTo])) && (
                            <ProductCard key={i} tagsKey={i} starsKey={i} priceKey={i}
                             tags={product.tags} 
                            discount={product.discount} imgUrl={product.img_url} ship={product.ship_to_country}
                            title={product.name} stars={product.stars}
                            reviews={product.reviews} price={product.price_usd}
                            updateCart={props.updateCart}
                            />
                        )
                    ))}
                    <div className="footer w-100 mt-5 py-3 text-center ">
                        Join our Global Community <br></br>
                        <a href="mailto:info@superkids.@gmail.com">Contact US</a>
                    </div>
                    
                    
                </div>
            </div>
            
        </section>

    
    );

    
}

export default Products;