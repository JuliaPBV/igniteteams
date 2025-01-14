import { Header } from '@/src/components/Header';
import { ButtonIcon } from '@/src/components/ButtonIcon';
import { Container, Form } from './styles';
import { Highlight } from '@/src/components/Highlight';
import { Input } from '@/src/components/Input';
import { Filter } from '@/src/components/Filter';

export function Players() {
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

            <Filter 
            title="Time A"
            />
        </Container>
    )
}