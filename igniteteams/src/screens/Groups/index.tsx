import { Header } from "@/src/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/src/components/Highlight";
import { GroupCard } from "@/src/components/GroupCard";

export default function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}
