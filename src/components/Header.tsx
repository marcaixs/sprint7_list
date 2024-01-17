import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false); // Close signup form if open
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false); // Close login form if open
  };

  return (
    <>
      {/* ... existing code ... */}
      <div className="flex justify-center items-center mb-2 gap-6 border-t-2 border-b-2 border-neutral-800">
        <Link to="/">
          <a className="text-xl text-white font-mono border-r-2 border-l-2 border-neutral-800 px-6 py-3">HOME</a>
        </Link>
        <Link to="starships">
          <a className="text-xl text-white font-mono border-r-2 border-l-2 border-neutral-800 px-6 py-3">STARSHIPS</a>
        </Link>
        {!isLoggedIn && (
          <>
            <span
              className="text-xl text-white font-mono border-r-2 border-l-2 border-neutral-800 px-6 py-2 cursor-pointer"
              onClick={toggleLogin}
            >
              Login
            </span>
            <span
              className="text-xl text-white font-mono border-r-2 border-l-2 border-neutral-800 pr-6 py-2 cursor-pointer"
              onClick={toggleSignup}
            >
              Signup
            </span>
          </>
        )}
        {isLoggedIn && (
          <span
            className="text-xl text-white font-mono border-r-2 border-neutral-800 pr-6 py-2 cursor-pointer"
            onClick={handleLogout}
          >
            LOGOUT
          </span>
        )}
      </div>

      {showLogin && <Login />}
      {showSignup && <Signup />}
    </>
  );
};

export default Header;