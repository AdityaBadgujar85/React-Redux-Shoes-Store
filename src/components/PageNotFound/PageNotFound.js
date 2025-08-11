import React from 'react';
import classes from '../css/PageNotFound.module.css'
function PageNotFound() {
    return ( 
        <div className={classes.mainContainer}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>The resource request could not be found on this server </p>
        </div>
     );
}

export default PageNotFound;