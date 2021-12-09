import React from 'react';
import './Header.css'

const Header = () => {
    return ( 
        <header>
            <div>
                <p>Hello There</p>
                <h1>We Are Glint</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet, veniam cum quam magni voluptatem eligendi harum accusantium repudiandae quo deleniti neque placeat perspiciatis minus non impedit corporis. Ut, optio.</p>
            <div className="stats">
                <div><p>127</p><p>Award Recieved</p></div>
                <div><p>127</p><p>Award Recieved</p></div>
                <div><p>127</p><p>Award Recieved</p></div>
                <div><p>127</p><p>Award Recieved</p></div>
            </div>
        </header>
     );
}
 
export default Header;