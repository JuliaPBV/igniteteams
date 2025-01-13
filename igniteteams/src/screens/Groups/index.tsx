import { Container } from "./styles";

import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@/src/components/GroupCard";
import { Highlight } from "@/src/components/Highlight";
import { Header } from "@/src/components/Header";

export default function Groups() {
    const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);

    return (
        <Container>
            <Header />

            <Highlight 
            title="Turmas"
            subtitle="jogue com sua turma"
            />

            <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
            <GroupCard 
            title={item} 
            />)}
            />

        </Container>
    );
}

