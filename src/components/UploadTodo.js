import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ProgressBar from './ProgressBar';
// import 'firebase/storage';
// import 'firebase/firestore';
import { projectFirestore } from '../firebase/config';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    margin: 50px auto;
    justify-content: center;
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
`;

const Input = styled.input`
    width: 300px;
    border-radius: 4px;
    padding: 10px 20px;
    border: 1px solid #9ea89d;
    font-size: 15px;
    background-color: transparent;
`;

const Circle = styled.button`
    width: 15px;
    height: 15px;
    margin: 10px 2px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
`;

const Button = styled.button`
    margin-left: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #9da8a7;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    color: white;
`;

const UploadTodo = () => {
    const [todo, setTodo] = useState(null);
    const [error, setError] = useState(null);
    const [selectedColor, setSelectedColor] = useState(1);
    const { register, setValue, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        setValue('todoInput', '');
        setTodo(data.todoInput);
        const collectionRef = projectFirestore.collection('todos');
        await collectionRef.add({ todo: data.todoInput, finished: false });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    autoComplete='off'
                    placeholder='Add todo item...'
                    name='todoInput'
                    type='text'
                    ref={register({ required: true })}
                />
                <Button type='submit'>spremi</Button>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {selectedColor === 1 ? (
                    <Circle
                        style={{
                            backgroundColor: 'red',
                            width: '20px',
                            height: '20px',
                        }}
                    />
                ) : (
                    <Circle
                        onClick={() => setSelectedColor(1)}
                        style={{ backgroundColor: 'red' }}
                    />
                )}

                {selectedColor === 2 ? (
                    <Circle
                        style={{
                            backgroundColor: 'yellow',
                            width: '20px',
                            height: '20px',
                        }}
                    />
                ) : (
                    <Circle
                        onClick={() => setSelectedColor(2)}
                        style={{ backgroundColor: 'yellow' }}
                    />
                )}

                {selectedColor === 3 ? (
                    <Circle
                        style={{
                            backgroundColor: 'green',
                            width: '20px',
                            height: '20px',
                        }}
                    />
                ) : (
                    <Circle
                        onClick={() => setSelectedColor(3)}
                        style={{ backgroundColor: 'green' }}
                    />
                )}
            </div>

            <div>{error && <div>{error}</div>}</div>
        </Form>
    );
};

export default UploadTodo;
