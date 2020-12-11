import React, { useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import styled from 'styled-components';
import Todo from './Todo';

const Wrapper = styled.div`
    /* max-width: 1200px; */
    margin: 0 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-columns: repeat(4, 1fr);

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 100%;
    } */
`;

const TodoGrid = () => {
    const { docs } = useFirestore('todos');

    return (
        <Wrapper>
            {docs && docs.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </Wrapper>
    );
};

export default TodoGrid;
