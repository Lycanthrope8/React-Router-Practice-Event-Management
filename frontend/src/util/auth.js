

export const getAuthTokens = () => {
    const token = localStorage.getItem('token');
    
    return token ; 
}

export const tokenLoader = () => {
    return getAuthTokens();
}

export const checkAuthLoader = () => {
    const token = getAuthTokens();
    if(!token){
        return redirect('/auth');
    }
}




