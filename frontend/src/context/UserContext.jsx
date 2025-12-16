import { createContext, useState } from "react"

export const UserDataContext = createContext();
function UserContext({ children }) {
    // will removed after making backend
    const demoUserData = {
        profileImg: null,
        name: "User 1",
        isOwner: true
    }
    const [user, setUser] = useState(null);
    
    return <UserDataContext.Provider value={{ user, setUser }}>
        {children}
    </UserDataContext.Provider>
}

export default UserContext;
