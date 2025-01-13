import { Header } from '@/src/components/Header';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@/src/components/Highlight';
import { Button } from '@/src/components/Button';
import { Input } from '@/src/components/Input';

export function NewGroup(){
    return(
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Highlight 
                title="Nova turma"
                subtitle="crie a turma para adicionar as pessoas"
                />
                <Input />

                <Button 
                title="Criar"
                style={{ marginTop: 20 }}
                />

            </Content>
        </Container>
    );
}