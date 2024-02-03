
function Quantity(props) {

    return(
        <div className="quantity">
            <button onClick={props.incVal} className="btn bg-light text-dark py-1">
                <i className="fa-solid fa-plus"></i>
            </button>
            <span className="">{props.val}</span>
            <button onClick={props.decVal} className="btn bg-light text-dark py-1">
                <i className="fa-solid fa-minus"></i>
            </button>
        </div>
    );
}

export default Quantity;