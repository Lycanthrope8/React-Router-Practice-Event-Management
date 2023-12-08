export const getAuthTokens = () => {
    const token = localStorage.getItem('token');
    
    return token ; 
}