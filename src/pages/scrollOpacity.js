import { useState, useEffect } from "react";

const useScrollOpacity = () => {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = window.innerHeight * 0.7;

        const newOpacity = 1 - Math.min(scrollPosition / maxScroll, 1);
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return opacity;
};

export default useScrollOpacity;
