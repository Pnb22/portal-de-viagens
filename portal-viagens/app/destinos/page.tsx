import Layout from "@/components/Layout"
import { destinos } from "@/data/destinos"
import CardDestino from "@/components/CardDestino"

export default function Destinos() {
  return (
    <Layout>
      <h2>Destinos Turísticos</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </Layout>
  )
}