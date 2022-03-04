import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ReDirect = () => {
    const router = useRouter();
    useEffect(() => {
        let gameCode;
        if (window !== undefined) {
            gameCode = localStorage.getItem('gameCode');
        }
        gameCode ? router.push(`/game/${gameCode}`) : router.back();
    }, [])
    return null;
}

export default ReDirect;
