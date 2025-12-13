function PaymentSection() {
    return (
        <div className="pop-up-form">
            <form>
                <div className="form-column">
                    <label htmlFor="">Holder Name</label>
                    <input type="text" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Card Number</label>
                    <input type="number" />
                </div>
                <div className="form-column">
                    <label htmlFor="">Expiry Date</label>
                    <input type="date" />
                </div>
                <div className="form-column">
                    <label htmlFor="">CVV Number</label>
                    <input type="number" />
                </div>
            </form>
        </div>
    )
}

export default PaymentSection