// import React from 'react'

// function Header({onDarkModeClick}) {
//    
//     const header = isDarkMode ? "Dark" : "Light"

//    

//   return (
//     <div>
//          <header>
//         <h2>Shopster</h2>
//         <button onClick={onDarkModeClick}>
//           {header}
//         </button>
//       </header>
//     </div>
//   )
// }

// export default Header

import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  const buttonText = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={onDarkModeClick}>{buttonText}</button>
    </header>
  );
}

export default Header;
