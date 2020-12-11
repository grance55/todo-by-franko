import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { useState } from 'react';

const ProgressBar = ({ todo, setTodo }) => {
    const { err, progress } = useStorage(todo);

    useEffect(() => {
        if (progress) {
            setTodo(null);
        }
    }, [progress, setTodo]);

    return (
        <div>
            <div style={{ background: 'green' }}>progress</div>
        </div>
    );
};

export default ProgressBar;
