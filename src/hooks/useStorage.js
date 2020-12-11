import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';

const useStorage = (todo) => {
    const [progress, setProgress] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storageREF = projectStorage.ref(todo);
        const collectionRef = projectFirestore.collection('todos');

        storageREF.put(todo).on(
            'state_changed',
            (snap) => {
                setProgress(true);
            },
            (err) => {
                setError(err);
            },
            async () => {
                collectionRef.add({ todo, finished: false });
                setProgress(false);
            }
        );
    }, [todo]);

    return { progress, error, todo };
};

export default useStorage;
