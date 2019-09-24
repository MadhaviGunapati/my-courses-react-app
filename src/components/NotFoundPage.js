import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to="/" className="btn btn-primary">Back To Home Page</Link>
        </div>
    )
}

export default NotFoundPage;
