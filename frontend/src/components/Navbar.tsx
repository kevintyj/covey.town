import React from 'react';

export default  function Navbar() {
  const { user, username } = {};

  return (
    <nav className={'navbar'}>
      <ul>
        <li>

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
              <button>
                Signin
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
