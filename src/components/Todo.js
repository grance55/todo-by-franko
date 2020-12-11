import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { projectFirestore, projectStorage } from '../firebase/config';
import { ReactComponent as DeleteIcon } from '../assets/images/delete.svg';
import { ReactComponent as EditIcon } from '../assets/images/edit.svg';

const Wrapper = styled.div`
    min-height: 200px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 1s ease;
    background-color: #ffa822;
    position: relative;
    display: grid;
    grid-template-rows: auto 40px;
    text-align: center;
    padding: 5px;
`;

const Input = styled.input`
    height: auto;
    width: 100%;
    padding: 10px 5px;
    border: none;
    background-color: white;
    border-radius: 4px;
    opacity: 0.5;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

const Div = styled.div`
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
`;

const Button = styled.div`
    width: 50px;
    border: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    word-wrap: break-word;
    overflow: hidden;
    padding: 20px;
    width: 100%;
`;

const Todo = ({ todo }) => {
    const [enabledInput, setEnabledInput] = useState(true);
    const [inputValue, setInputValue] = useState(todo.todo);

    const onDeleteClick = () => {
        const collectionRef = projectFirestore.collection('todos');
        collectionRef.doc(todo.id).delete();
    };

    const onEditClick = () => {
        setEnabledInput(false);
    };

    const onSaveClick = async () => {
        const collectionRef = projectFirestore.collection('todos');
        await collectionRef
            .doc(todo.id)
            .update({ todo: `${inputValue}`, finished: false });
        window.location.reload(false);
    };

    return (
        <Wrapper>
            <Container>
                {enabledInput ? (
                    <Div style={{ width: '100%' }}>{todo.todo}</Div>
                ) : (
                    <Input
                        disabled={enabledInput}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoComplete='off'
                        name='password'
                        type='text'
                    />
                )}
            </Container>

            <Buttons>
                <Button style={{ marginRight: '5px' }} onClick={onDeleteClick}>
                    <DeleteIcon width='20px' height='20px' />
                </Button>
                {enabledInput ? (
                    <Button style={{ marginLeft: '5px' }} onClick={onEditClick}>
                        <EditIcon width='20px' height='20px' />
                    </Button>
                ) : (
                    <div>
                        <Button
                            style={{ marginLeft: '5px' }}
                            onClick={onSaveClick}
                        >
                            save
                        </Button>
                        {/* <Button
                            style={{ marginLeft: '5px' }}
                            onClick={onSaveClick}
                        >
                            cancel
                        </Button> */}
                    </div>
                )}
            </Buttons>
        </Wrapper>
    );
};

export default Todo;
