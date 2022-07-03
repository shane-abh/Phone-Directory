import React from "react";
const Header = function(){
    const headerStyle = {textAlign: 'center', padding:20, backgroundColor: 'lightblue'};
    return(
        <div style={headerStyle} >
          <h1 >Phone Directory</h1>
        </div>
    );
}



export default Header;