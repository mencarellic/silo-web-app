import React from 'react';

const IPData = ({ ip }) => {
    console.log(ip);
    return (
        <>
            <p>Your visiting from {ip.city}, {ip.country}.</p>
            <p>Your IP is: {ip.ip}</p>
            <p>This data is sourced from <a href="https://ip-fast.com/" class="text-white">Ip Fast</a></p>
        </>
    );
};

export default IPData;