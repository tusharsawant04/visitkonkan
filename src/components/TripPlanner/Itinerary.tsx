import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Activity {
  id: string;
  title: string;
  duration: string;
  type: string;
}

const Itinerary: React.FC<{
  tripDetails: { itinerary: Activity[] };
  setTripDetails: (details: { itinerary: Activity[] }) => void;
  onNext: () => void;
  onBack: () => void;
}> = ({ tripDetails, setTripDetails, onNext, onBack }) => {
  const [activities] = useState([
    { id: '1', title: 'Beach Visit', duration: '2 hours', type: 'activity' },
    { id: '2', title: 'Local Sightseeing', duration: '3 hours', type: 'activity' },
    { id: '3', title: 'Temple Visit', duration: '1 hour', type: 'activity' },
    // Add more activities based on the destination
  ]);

  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(selectedActivities);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSelectedActivities(items);
  };

  return (
    <div className="itinerary-planner">
      <h2 className="mb-4">Create Your Itinerary</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Available Activities</div>
            <div className="card-body">
              {activities.map((activity) => (
                <div 
                  key={activity.id}
                  className="activity-item p-2 mb-2 bg-light rounded"
                  onClick={() => setSelectedActivities([...selectedActivities, activity])}
                >
                  <h6 className="mb-1">{activity.title}</h6>
                  <small className="text-muted">{activity.duration}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="itinerary">
              {(provided: { droppableProps: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>; innerRef: React.Ref<HTMLDivElement> | undefined; placeholder: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="selected-activities"
                >
                  {selectedActivities.map((activity, index) => (
                    <Draggable
                      key={activity.id}
                      draggableId={activity.id}
                      index={index}
                    >
                      {(provided: { innerRef: React.Ref<HTMLDivElement> | undefined; draggableProps: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>; dragHandleProps: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>; }) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="activity-item p-3 mb-2 bg-white rounded shadow-sm"
                        >
                          <h6 className="mb-1">{activity.title}</h6>
                          <small className="text-muted">{activity.duration}</small>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onBack}>
          Back
        </button>
        <button 
          className="btn btn-primary" 
          onClick={() => {
            setTripDetails({ ...tripDetails, itinerary: selectedActivities });
            onNext();
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Itinerary;