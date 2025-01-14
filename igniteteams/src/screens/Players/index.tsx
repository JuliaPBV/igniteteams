import { Header } from '@/src/components/Header';
import { ButtonIcon } from '@/src/components/ButtonIcon';
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';
import { Highlight } from '@/src/components/Highlight';
import { Input } from '@/src/components/Input';
import { Filter } from '@/src/components/Filter';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { PlayerCard } from '@/src/components/PlayerCard';

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([])

    return (
        <Container>
            <Header showBackButton />

            <Highlight 
            title="Nome da turma"
            subtitle="adicione o pessoal e separe os times"
            />

        <Form>
            <Input 
            placeholder="Nome da pessoa"
            autoCorrect={false}
            />

            <ButtonIcon 
            icon='add'
            />
            </Form>

        <HeaderList>
            <FlatList 
            data={['Time A', 'Time B']}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Filter
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
                />
            )}
            horizontal
            />

            <NumbersOfPlayers>
                {players.length}
            </NumbersOfPlayers>
            </HeaderList>

            <FlatList 
            data={players}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <PlayerCard 
                name={item} 
                onRemove={() => { }}
                />
            )}
            />
        </Container>
    )
}