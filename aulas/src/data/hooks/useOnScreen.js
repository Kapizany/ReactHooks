import {useState, useEffect} from 'react';

export default function useOnScreen(ref, rootMargin = '0px'){
    const [isVisible, setVisible] = useState(false); // Objeto não começa visível

    useEffect(()=> {
        const elem = ref.current;
        const observer = new IntersectionObserver(([entry])=>{
            setVisible(entry.isIntersecting);
        }, {
            rootMargin
        });
        if(elem){
            observer.observe(elem);
        }

        return () => observer.unobserve(elem);
    },[ref, rootMargin]);
    return isVisible;
}