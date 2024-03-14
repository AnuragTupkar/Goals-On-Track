import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanBoard = () => {
  const [lists, setLists] = useState([
    {
      id: 'todo',
      title: 'To Do',
      cards: [{ id: '1', content: 'Task 1' }, { id: '2', content: 'Task 2' }],
    },
    {
      id: 'inProgress',
      title: 'In Progress',
      cards: [],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [],
    },
  ]);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceListIndex = parseInt(source.droppableId);
    const destinationListIndex = parseInt(destination.droppableId);
    const sourceList = lists.find((list, index) => index === sourceListIndex);
    const destinationList = lists.find(
      (list, index) => index === destinationListIndex
    );
    const draggedCardIndex = source.index;
    const draggedCard = sourceList.cards[draggedCardIndex];

    sourceList.cards.splice(draggedCardIndex, 1);
    destinationList.cards.splice(destination.index, 0, draggedCard);

    setLists([...lists]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-center mt-8 space-x-8">
        {lists.map((list, listIndex) => (
          <div key={list.id} className="p-4 bg-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">{list.title}</h3>
            <Droppable droppableId={listIndex.toString()}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-100 rounded p-2"
                  style={{ minHeight: '100px' }}
                >
                  {list.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-2 rounded shadow mb-2"
                        >
                          {card.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;