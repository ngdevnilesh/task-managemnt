import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import db from '../common/firebase'; // Import Firestore instance

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleSave = async (taskObj) => {
        try {
            await addDoc(collection(db, 'tasks'), taskObj); // Save task in Firestore
            reset(); // Reset the form fields
            toggle(); // Close the modal after saving
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(handleSave)}>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.taskName && 'is-invalid'}`}
                            {...register("taskName", { required: true })}
                        />
                        {errors.taskName && <small className='text-danger'>Task Name is required</small>}
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            rows="5"
                            className={`form-control ${errors.description && 'is-invalid'}`}
                            {...register("description", { required: true })}
                        ></textarea>
                        {errors.description && <small className='text-danger'>Description is required</small>}
                    </div>

                    <ModalFooter>
                        <Button color="primary" type="submit">Create</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default CreateTaskPopup;