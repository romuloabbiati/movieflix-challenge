import { AuthContext, AuthContextData } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import history from 'util/history';
import { getTokenData, isAuthenticated, removeAuthData } from 'util/requests';
import './styles.css';

const Navbar = () => {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            });
        } else {
            setAuthContextData({
                authenticated: false
            });
        }
    }, [setAuthContextData]);

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData({
            authenticated: false
        });
        history.replace('/');
    };

    return (
        <nav className="navbar bg-primary main-nav">
            <div className='container-fluid'>
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>

                <div>
                    {authContextData.authenticated ? (
                        <a className='nav-logout' href="#SAIR" onClick={handleLogoutClick}>
                            SAIR
                        </a>
                    ) : (
                        <a href="#">

                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;