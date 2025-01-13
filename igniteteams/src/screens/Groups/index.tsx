import { Container } from "./styles";

import { GroupCard } from "@/src/components/GroupCard";
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

            <GroupCard title="Galera do Ignite" />
        </Container>
    );
}

