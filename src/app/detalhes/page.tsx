import { JsonHabilidadeRepositorio } from "@/repositories/json-habilidade-repositorio";

export default async function DetalhesPage() {
  const repo = new JsonHabilidadeRepositorio();
  const habilidades = await repo.findAll();

  return (
    <div className="habilidades-container">
      <h1>Habilidades</h1>
      <ul >
        {habilidades.map((hab) => (
          <li key={hab.id}>
            <h2>{hab.titulo}</h2>
            <p>{hab.descricao}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
