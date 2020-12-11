import UploadTodo from './components/UploadTodo';
import TodoGrid from './components/TodoGrid';
import styled from 'styled-components';

const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #134e6f;
    letter-spacing: 2px;
`;

const Text = styled.p`
    width: 300px;
    margin: 0 auto;
    text-align: center;
    color: #b24238;
`;

function HomePage() {
    return (
        <div>
            <Title>Frankova To-Do Lista</Title>
            <Text>
                Trebate nešto obaviti?{' '}
                <span>
                    Obavite to odma! Dobro aj, ako baš ne možete odma spremite
                    pa cete posli!
                </span>
            </Text>
            <UploadTodo />
            <TodoGrid />
        </div>
    );
}

export default HomePage;
