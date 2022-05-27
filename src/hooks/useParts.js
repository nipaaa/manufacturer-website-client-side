import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-badlands-19612.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return [parts, setParts];
}
export default useParts;