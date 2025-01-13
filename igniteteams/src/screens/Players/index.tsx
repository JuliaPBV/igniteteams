import { Header } from '@/src/components/Header';
import { Container } from './styles';
import { Highlight } from '@/src/components/Highlight';

export function Players() {
    return (
        <Container>
            <Header showBackButton />

            <Highlight 
            title="Nome da turma"
            subtitle="adicione o pessoal e separe os times"
            />
        </Container>
    )
}