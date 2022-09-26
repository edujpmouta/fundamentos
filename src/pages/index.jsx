import Navegador from '../components/Navegador'

export  default function Inicio(){
    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#008B8B" />
            <Navegador texto="Jsx" destino="/jsx" cor="#20B2AA"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-02/321" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="#4682B4"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#4682B4"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#4682B4"/>
        </div>
    )
}