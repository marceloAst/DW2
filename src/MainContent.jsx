import Section from "./Section"
import './MainContent.css'

export default function MainContent(){
    return(
        
        <main className="conteudo">
            <Section title="Sobre nos">
                <p>
                    Diciplina de Desenvolvimento Web2
                </p>
            </Section>
            <Section title="Contato">
                <p>
                    Você pode entrar em contato com nós, a hora que quiser 
                </p>
            </Section>
        </main>
    )
}