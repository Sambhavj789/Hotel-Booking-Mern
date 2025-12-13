import { useState } from "react";
import "./Filters.css"
import { IoStarSharp } from "react-icons/io5";
function Filters() {
    let locations = ["Gangtok", "Srinagar", "Jaipur", "Manali", "Gulmarg", "Shillong"];
    let categories = ["Resort", "Luxury", "Cottage", "5-Star", "Budget"];
    const minPrice = 0;
    const maxPrice = 100000;
    const [currPrice,setCurrPrice] = useState(maxPrice/2);
    return (
        <div className="filters">
            <div className="filter-columns">
                <h1>Price Range</h1>
                <input type="range" className="price-range-slider" onChange={(e)=>{
                    setCurrPrice(e.target.value*maxPrice/100)
                }}/>
                <div className="price-range">
                    <span>₹{minPrice}</span>
                    <span>₹{currPrice}</span>
                </div>
            </div>
            <div className="filter-columns">
                <h1>Ratings</h1>
                <div className="filter-column">
                    <div className="filter-options">
                        <input type="checkbox" />
                        <label htmlFor="">
                            <div className="stars-conatiner">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                            5</label>
                    </div>
                    <div className="filter-options">
                        <input type="checkbox" />
                        <label htmlFor="">
                            <div className="stars-conatiner">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                            4

                        </label>
                    </div>
                    <div className="filter-options">
                        <input type="checkbox" />
                        <label htmlFor="">
                            <div className="stars-conatiner">
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                            3</label>
                    </div>
                </div>
            </div>
            <div className="filter-columns">
                <h1>Location</h1>
                <div className="filter-column">
                    {
                        locations.map((location, index) => {
                            return <div className="filter-options" key={index}>
                                <input type="checkbox" />
                                <label htmlFor="">{location}</label>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="filter-columns">
                <h1>Category</h1>
                <div className="filter-column">
                    {
                        categories.map((category, index) => {
                            return <div className="filter-options" key={index}>
                                <input type="checkbox" />
                                <label htmlFor="">{category}</label>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="apply-filters">
                <button>Apply Filters</button>
            </div>
        </div>
    )
}

export default Filters