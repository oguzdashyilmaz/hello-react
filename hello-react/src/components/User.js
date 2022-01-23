import React from 'react';

function User({ name, surname, isLoggedIn, age, friends }) {
    return (
        <>
            <h2>
                {
                    isLoggedIn
                        ? `${name} ${surname} ${age}`
                        : "not logged in..."
                }
            </h2>
            {
                friends.map((friend, index) => <div key={index}>{index} - {friend}</div>)
            }
            <ul>
                <li><a href="#">Lorem, ipsum dolor.</a></li>
                <li><a href="#">Porro, voluptas ut!</a></li>
                <li><a href="#">Quidem, possimus sapiente.</a></li>
            </ul>
        </>
    )
}

export default User;