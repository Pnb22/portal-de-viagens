import Layout from "@/components/Layout"
import { destinos } from "@/data/destinos"

export default function DestinoDetalhe({ params }: { params: { id: string } }) {
  const destino = destinos.find(
    (d) => d.id.toLowerCase() === params.id.toLowerCase()
  )

  if (!destino) {
    return (
      <Layout>
        <h2>Destino não encontrado</h2>
      </Layout>
    )
  }

  return (
    <Layout>
      <h2>{destino.nome}</h2>

      {/* Galeria de imagens */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {destino.imagens.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={destino.nome}
            width={300}
            style={{ borderRadius: "10px" }}
          />
        ))}
      </div>

      <p style={{ marginTop: "20px" }}>{destino.descricao}</p>

      <h3>Pontos Turísticos</h3>
      <ul>
        {destino.pontos.map((ponto, index) => (
          <li key={index}>{ponto}</li>
        ))}
      </ul>

      <h3>Atividades Recomendadas</h3>
      <ul>
        {destino.atividades.map((atividade, index) => (
          <li key={index}>{atividade}</li>
        ))}
      </ul>
    </Layout>
  )
}