import React, { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [dogImage, setDogImage] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogImage(data.message);
                setLoading(false);
            });
        }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <img src={dogImage} alt="A Random Dog" />
            )}
        </div>
    );
}

export default App;
