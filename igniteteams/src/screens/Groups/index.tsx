import { Container } from "./styles";
import { Highlight } from "@/src/components/Highlight";
import { Header } from "@/src/components/Header";

export default function Groups() {
    return (
        <Container>
            <Header />
            <Highlight 
            title="Turmas"
            subtitle="jogue com sua turma"
            />
        </Container>
    );
}

