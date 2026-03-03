import Link from "next/link"
import styles from "@/styles/CardDestino.module.css"

interface Props {
  id: string
  nome: string
  imagem: string
}

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <Link href={`/destinos/${id}`}>Ver detalhes</Link>
    </div>
  )
}