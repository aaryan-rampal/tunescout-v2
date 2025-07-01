import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Extract the authorization code from the URL
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        if (code) {
            // Store the code in local storage or handle it as needed
            window.localStorage.setItem('auth_code', code);
        } else {
            // Handle the case where no code is present
            console.error("Authorization code not found in the URL.");
        }
        navigate('/dashboard', {replace: true}); // Redirect to home or another page
    }, [location, navigate]);

    return (<div></div>)
}

export default Callback;
