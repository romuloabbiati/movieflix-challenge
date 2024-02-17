import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import history from 'util/history';
import { getAuthData, getTokenData, isAuthenticated, removeAuthData, TokenData } from 'util/requests';
import './styles.css';

type AuthData = {
    authenticated: boolean,
    tokenData?: TokenData
};

const Navbar = () => {
    const [ authData, setAuthData ] = useState<AuthData>({authenticated: false});

    useEffect(() => {
        if(isAuthenticated()) {
            setAuthData({
                authenticated: true,
                tokenData: getTokenData()
            });
        } else {
            setAuthData({
                authenticated: false
            });
        }
    }, []);

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthData({
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

                <div className='nav-logout'>
                    {authData.authenticated ? (
                        <a href="#SAIR" onClick={handleLogoutClick}>
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