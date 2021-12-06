import React from 'react';

const RandomCat = ({ cat }) => {
    console.log(cat);
    return (
        <>
            <h3>Here is a random cat photo</h3>
            <img src={cat.file} className="img-fluid rounded mx-auto d-block" alt="Random cat" />
            <p>Random cat photo sourced from <a href="https://random.cat" class="text-white">Random.Cat</a></p>
        </>
    );
};

export default RandomCat;