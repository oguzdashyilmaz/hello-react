import React from 'react';

function User({name, surname, isLoggedIn, age}) {
    return (
        <>
            <h2>
                {
                    isLoggedIn 
                    ? `${name} ${surname} ${age}`
                    : "not logged in..."
                }
            </h2>
            <ul>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Porro, voluptas ut!</a></li>
                <li><a href="#">Quidem, possimus sapiente.</a></li>
            </ul>
        </>
    )
}

export default User;