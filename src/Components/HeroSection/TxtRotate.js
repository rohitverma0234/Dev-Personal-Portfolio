import React, { useState, useEffect } from 'react';

function TxtRotate({ toRotate, period = 2000 }) {
    const [txt, setTxt] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let frameId;

        const tick = () => {
            const i = loopNum % toRotate.length;
            const fullTxt = toRotate[i];

            setTxt(prevTxt =>
                isDeleting ? fullTxt.substring(0, prevTxt.length - 1) : fullTxt.substring(0, prevTxt.length + 1)
            );

            if (!isDeleting && txt === fullTxt) {
                setIsDeleting(true);
            } else if (isDeleting && txt === '') {
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
            }

            frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frameId);
    }, [loopNum, isDeleting, txt, toRotate]);

    return <span className="wrap">{txt}</span>;
}

export default TxtRotate;
