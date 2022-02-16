import React from 'react';

export default  function Navbar() {
  const user = true;
  const username = true;

  return (

    <nav>
      <ul>
        <li>
          <img src='../../public/nav_logo.png' alt='logo' />
        </li>

        {username && (
          <>
            <li>
              User is signed in
            </li>
          </>
        )}

        {!username && (
          <>
            <li>
              <button type='button'>
                Signin
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
