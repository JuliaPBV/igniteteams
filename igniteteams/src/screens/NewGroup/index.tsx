import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@/src/storage/group/groupCreate";
import { AppError } from "@/src/utils/AppError";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header showBackButton />

          <Content>
            <Icon />

            <Highlight
              title="Nova turma"
              subtitle="crie a turma para adicionar as pessoas"
            />
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >
              <Input
                placeholder="Nome da turma"
                onChangeText={setGroup}
                value={group}
              />

              <Button
                title="Criar"
                style={{ marginTop: 20 }}
                onPress={handleNew}
              />
            </ScrollView>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
