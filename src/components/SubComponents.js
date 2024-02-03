
import React from "react";

export function Stars({num}){
    const empty = 5 - Math.ceil(num);
    const stars = [];
    for(var i=0; i<Math.floor(num); i++)
        stars.push(<i className="fa-solid fa-star main-color"></i>);
    
    if(!Number.isInteger(num)) 
        stars.push(<i className="fa-regular fa-star-half-stroke main-color"></i>);

    for(var i=0; i<empty; i++)
        stars.push(<i className="fa-regular fa-star main-color"></i>);
    
    return stars;
}

export function Tags(props){
    var tagName = '', content = '';
    const tags = [];
    for(var i=0; i<props.items.length; i++){
        tagName = props.items[i].toLowerCase().replace(' ', '-');
        content = props.items[i];
        if(tagName.toLowerCase() == 'discount') content = `- ${props.discount}%`;
        tags.push(<span className={`tag ${tagName} main-bgColor`}>{content}</span>)
    }
    return tags;
}

export function FinalPrice(props){
    var finalPrice = [];
    var priceAfterDiscount = (props.mainPrice - ((props.discount/100)*props.mainPrice)).toFixed(2);
    
    if(props.discount != 0 && props.discount != undefined)
        finalPrice.push(<span className="disabled"><del>${props.mainPrice.toFixed(2)}</del></span>);
    
    finalPrice.push(<h5 className="total-price">${priceAfterDiscount}</h5>);
    return finalPrice;
}

