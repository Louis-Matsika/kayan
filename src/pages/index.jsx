import Layout from "../../layouts/Layout"
import LobbyRows from "#/components/LobbyRows"

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/OMOdirectory')
  const OMOdirectory = await res.json()

  return { props: { OMOdirectory } }
}

export default function MyApp({OMOdirectory}) {
  return (
    <Layout>
      <LobbyRows directory={OMOdirectory}/>
    </Layout>
  )
}



