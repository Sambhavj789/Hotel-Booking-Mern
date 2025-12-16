import { createContext, useState } from "react"

export const HotelDetailsDataProvider = createContext();
function HotelDetailsContext({ children }) {
    const [isPopupOpen, setIsPopUpOpen] = useState(false);
    const [currBookingDetails, setCurrBookingDetails] = useState(null);
    return (
        <HotelDetailsDataProvider.Provider value={{ isPopupOpen, setIsPopUpOpen, currBookingDetails, setCurrBookingDetails }}>
            {children}
        </HotelDetailsDataProvider.Provider>
    )
}

export default HotelDetailsContext;