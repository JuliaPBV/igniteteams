import { Container } from "./styles";

import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@/src/components/GroupCard";
import { Highlight } from "@/src/components/Highlight";
import { Header } from "@/src/components/Header";
import { ListEmpty } from "@/src/components/ListEmpty";
import { Button } from "@/src/components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
