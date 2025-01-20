import { Header } from "@/src/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/src/components/Highlight";

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
