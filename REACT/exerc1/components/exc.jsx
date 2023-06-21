const Exc = (Props) => {
    return (
        <div>
        <h1>Aula Props</h1>
        <h2>Cadastro Aluno:</h2>
        <p>Nome: {Props.Nome}</p>
        <p>Curso: {Props.Curso}</p>
        <p>R.A: {Props.Ra}  </p>
        </div>
    )
}
export default Exc