import Layout from "../components/Layout"
import Cabecalho from "../components/Cabecalho";

export default function Exemplo(){
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js"/>
            <Cabecalho titulo="Aprenda Next.js na prática"/ >
        </Layout>
    )
}