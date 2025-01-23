import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { useNavigation } from "@react-navigation/native";

export default function NewGroup() {
  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate("players", { group: "Rocket" });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
