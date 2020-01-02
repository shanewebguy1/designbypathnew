import React from 'react';
import Scrollchor from 'react-scrollchor';
import PropTypes from 'prop-types';

const Navigation = ({ menu }) => (
    
    <div className="collapse navbar-collapse navbar-responsive-collapse">  
        <ul id="menu-main-menu" className="nav navbar-nav">
            {menu.items.map((item, i) => (
            <li key={i}>
                <Scrollchor to={item.url} >
                {item.title}
                </Scrollchor>
            </li>
            ))}
        </ul>
    </div> 
   
  );
  
  Navigation.propTypes = {
    menu: PropTypes.object,
  };
  
  export default Navigation;