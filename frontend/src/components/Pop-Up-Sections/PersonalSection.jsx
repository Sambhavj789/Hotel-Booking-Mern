function PersonalSection() {
    return (
        <div className="pop-up-form">
            <form>
                <div className="form-column">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Alternate Phone Number</label>
                    <input type="number" />
                </div>
            </form>
        </div>
    )
}

export default PersonalSection