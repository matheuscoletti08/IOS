import {useState} from "react";
const HooksAula1Pt2 = () => {
    let [Num, setNum] = useState (0)
    const handleSomar = () => {
        setNum(Num = Num + 1)
    }
    return (
        <div>
            <h2>Aula Hooks - 02</h2>
            <button onClick={handleSomar}>Clique para somar</button>
            <p>Contador: {Num}</p>
        </div>
    );
};

export default HooksAula1Pt2;