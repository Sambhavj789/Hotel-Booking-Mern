function StayDetailsSections() {
    return (
        <div className="pop-up-form">
            <form>
                <div className="form-column">
                    <label htmlFor="">Check-In Date</label>
                    <input type="date" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Check-Out Date</label>
                    <input type="date" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Number Of People</label>
                    <input type="number" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Special Requests</label>
                    <textarea></textarea>
                </div>
            </form>
        </div>
    )
}

export default StayDetailsSections