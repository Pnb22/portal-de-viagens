import Layout from "@/components/Layout"
import { destinos } from "@/data/destinos"

export default async function DestinoDetalhe({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const destino = destinos.find(
    (d) => d.id.toLowerCase() === id.toLowerCase()
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
      <p>{destino.descricao}</p>
    </Layout>
  )
}