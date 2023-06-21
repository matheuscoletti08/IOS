
const HooksAula1 = () => {

    let num = 0;

        const handleSomar = () => {
            num = num + 1
            console.log(num);
        }

    return (
        <div>
            <h2>Aula Hooks - 01</h2>
            <p>quantidade de clicks: {num}</p>
            <button onClick={handleSomar}>somar :)</button>
        </div>
    )
}

export default HooksAula1     