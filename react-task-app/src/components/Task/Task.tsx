import type { FC } from 'react';
import { container, title, description } from './Task.css';
import { Draggable } from '@hello-pangea/dnd';

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};
const Task: FC<TTaskProps> = ({ index, id, taskName, taskDescription }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={container}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
