import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}) {
    //to cause a re-render whenever a user clicks the forward and back buttons
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        };

    }, [])

    return <NavigationContext.Provider value={{}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext;