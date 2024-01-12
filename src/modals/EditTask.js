import React, { useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();

  useEffect(() => {
    reset({
      taskName: taskObj.taskName,
      description: taskObj.description
    });
  }, [taskObj, reset]);

  const handleUpdate = (data) => {
    updateTask(data);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="form-group">
            <label>Task Name</label>
            <Controller
              name="taskName"
              control={control}
              rules={{ required: "Task Name is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  className={`form-control ${errors.taskName && 'is-invalid'}`}
                  {...field}
                />
              )}
            />
            {errors.taskName && <small className='text-danger'>{errors.taskName.message}</small>}
          </div>
          <div className="form-group">
            <label>Description</label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <textarea
                  rows="5"
                  className={`form-control ${errors.description && 'is-invalid'}`}
                  {...field}
                ></textarea>
              )}
            />
            {errors.description && <small className='text-danger'>{errors.description.message}</small>}
          </div>

          <ModalFooter>
            <Button color="primary" type="submit">Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default EditTaskPopup;
