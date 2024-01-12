import { doc, updateDoc, deleteDoc, addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import db from '../common/firebase'; // Adjust the path as per your project structure
import axios from 'axios';
const TaskManagementList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [quote, setQuote] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'tasks'));
                const tasksArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTaskList(tasksArray);
            } catch (error) {
                console.error("Error fetching tasks: ", error);
            }
        };
        fetchTasks()
        console.log('Fetching tasks...');
    }, []); //


    useEffect(() => {
        fetchMotivationalQuote();
        console.log('Fetching quotes...');
    }, []);

    const fetchMotivationalQuote = async () => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            setQuote(response.data[Math.floor(Math.random() * 15) + 1].text)
            // Process your response data here
        } catch (error) {
            console.error('Error fetching motivational quote:', error);
        }
    };


    const deleteTask = async (id) => {
        try {
            await deleteDoc(doc(db, 'tasks', id));
            setTaskList(taskList.filter(task => task.id !== id));
        } catch (error) {
            console.error("Error deleting task: ", error);
        }
    };



    const updateListArray = async (obj, id) => {
        try {
            await updateDoc(doc(db, 'tasks', id), obj);
            // Update the local state as needed
        } catch (error) {
            console.error("Error updating task: ", error);
        }
    };


    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = async (taskObj) => {
        try {
            const docRef = await addDoc(collection(db, 'tasks'), taskObj);
            setTaskList([...taskList, { ...taskObj, id: docRef.id }]);
            setModal(false);
        } catch (error) {
            console.error("Error adding task: ", error);
        }
    };


    return (
        <>
            <div className="header text-center">
                <h3>Quotes : {quote}</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)} >Create Task</button>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj, index) => (
                    <Card
                        taskObj={obj}
                        key={obj.id}
                        index={index}
                        deleteTask={() => deleteTask(obj.id)}
                        updateListArray={(updatedObj) => updateListArray(updatedObj, obj.id)}
                    />
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TaskManagementList;