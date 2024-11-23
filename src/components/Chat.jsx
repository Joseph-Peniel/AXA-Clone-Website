import { useState, useEffect } from "react";

const Chat = () => {
    const [isBouncing, setIsBouncing] = useState(false);

    useEffect(() => {
        // Start an interval to toggle the bounce animation every 3 seconds
        const interval = setInterval(() => {
            setIsBouncing(true);
            // Remove the bounce animation class after it plays once
            setTimeout(() => setIsBouncing(false), 800); // Bounce duration
        }, 3000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`absolute right-0 mt-[70px] z-20 ${isBouncing ? "animate-bounce" : ""}`}>
            <a>
                <img
                    className='border-t border-l border-b border-0 border-[#00005b] inline-block'
                    src='../../Images/support.png'
                    alt='Support-Chat'
                />
            </a>
        </div>
    );
};

export default Chat;
