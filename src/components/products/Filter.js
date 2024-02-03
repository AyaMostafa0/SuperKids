

function Filter(props) {
    const brands = [
        'Castelli', 'Generic', 'MUST', 'Target', 'Thermos', 'Mintra', 'Activ', 'M&G', 'Disney'
        
    ];
    const categories = [
        'Bags', 'Pencilcase', 'Colours'
    ];
    const tags = [
        'New', 'Best Sell', 'Discount'
    ];
    
    const orders = [
        'Alphabetical', 'Prices (low to high)', 'Prices (high to low)'
    ]


    const handleBrand = (e) => {
        props.setBrand(e.target.value);
    };

    const handlePriceFrom = (e) => {
        props.setPriceFrom(e.target.value);
    };
    const handlePriceTo = (e) => {
        props.setPriceTo(e.target.value);
    };

    const handleCategory = (e) => {
        props.setCategory(e.target.value);
    };

    const handleStarsFrom = (e) => {
        props.setStarsFrom(e.target.value);
    };
    const handleStarsTo = (e) => {
        props.setStarsTo(e.target.value);
    };
    
    const handleTag = (e) => {
        props.setTag(e.target.value);
    };

    const handleOrder = (e) => {
        props.setOrder(e.target.value);
    };


    return(
        <div className="filter-box">
            <div className="row gy-3">

                <div className="filter-brand col-md-4">
                    <h5>Brands</h5>
                    <select onChange={handleBrand} className="form-select">
                        <option selected>All Brands</option>
                        {brands.map((brand, i)=>(
                            <option key={i} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-price col-md-4">
                    <h5>Price Range</h5>
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <input className="form-control" type="text" 
                            onChange={handlePriceFrom} value={props.priceFrom}
                            placeholder="Price From" />
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" type="text" 
                            onChange={handlePriceTo} value={props.priceTo}
                            placeholder="Price To" />
                        </div>
                    </div>
                </div>

                <div className="filter-category col-md-4">
                    <h5>Categories</h5>
                    <select onChange={handleCategory} className="form-select">
                        <option selected>All Categories</option>
                        {categories.map((category, i)=>(
                            <option key={i} value={category.toLowerCase()}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-stars col-md-4">
                    <h5>Stars Range</h5>
                    <div className="row gy-2">
                        <div className="col-md-6">
                            <input className="form-control" type="text" 
                            onChange={handleStarsFrom} value={props.starsFrom}
                            placeholder="Stars From" />
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" type="text" 
                            onChange={handleStarsTo} value={props.starsTo}
                            placeholder="Stars To" />
                        </div>
                    </div>
                </div>

                <div className="filter-category col-md-4">
                    <h5>Tags</h5>
                    <select onChange={handleTag} className="form-select">
                        <option selected>All Tags</option>
                        {tags.map((tag, i)=>(
                            <option key={i} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="filter-alpha col-md-4">
                    <h5>Sort By</h5>
                    <select onChange={handleOrder} className="form-select">
                        <option selected>No Order</option>
                        {orders.map((order, i)=>(
                            <option key={i} value={order.toLowerCase()}>
                                {order}
                            </option>
                        ))}
                    </select>
                </div>
                
            </div>
        </div>
    );
}

export default Filter;