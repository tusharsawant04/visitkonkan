import React from 'react';
// import { useRouter } from 'next/router';
import Layout from '../components/layout';
// import TripForm from '../components/TripPlanner/TripForm';
// import Itinerary from '../components/TripPlanner/Itinerary';
// import Accommodations from '../components/TripPlanner/Accommodations';
// import Transport from '../components/TripPlanner/Transport';
// import Summary from '../components/TripPlanner/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlanTrip.css';

// interface Activity {
//   id: string;
//   name: string;
//   time: string;
//   description: string;
// }

// interface TransportOption {
//   type: string;
//   price: number;
//   details: string;
// }

// interface TripDetails {
//   destination: string;
//   dates: Array<{ start: string; end: string }>;
//   duration: number;
//   groupSize: number;
//   budget: string;
//   preferences: string[];
//   itinerary?: Activity[];
//   transport?: TransportOption;
// }

// Update the StepComponentProps interface
// interface StepComponentProps {
//   tripDetails: TripDetails;
//   setTripDetails: React.Dispatch<React.SetStateAction<TripDetails>>;
//   onNext: () => void;
//   onBack: () => void;
//   isLastStep: boolean;
// }

const PlanTrip = () => {
  // const router = useRouter();d
  // const { place } = router.query;
  // const [currentStep, setCurrentStep] = useState(1);
  // const [tripDetails, setTripDetails] = useState<TripDetails>({
  //   destination: '',
  //   dates: [{ start: '', end: '' }],
  //   duration: 0,
  //   groupSize: 1,
  //   budget: '',
  //   preferences: [],
  //   itinerary: [],
  //   transport: undefined
  // });

  // useEffect(() => {
  //   if (place) {
  //     setTripDetails(prev => ({ ...prev, destination: place as string }));
  //   }
  // }, [place]);

  // const steps = [
  //   { id: 1, title: 'Basic Details', component: TripForm },
  //   { id: 2, title: 'Create Itinerary', component: Itinerary },
  //   { id: 3, title: 'Choose Stay', component: Accommodations },
  //   { id: 4, title: 'Transport Options', component: Transport },
  //   { id: 5, title: 'Review & Book', component: Summary },
  // ];

  // const CurrentStepComponent = steps[currentStep - 1]?.component;

  return (
    <Layout>
      <div className="plan-trip-container">
        {/* <div className="progress-bar-wrapper mb-4">
          <div className="d-flex justify-content-between">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`step-indicator ${currentStep >= step.id ? 'active' : ''}`}
              >
                <div className="step-number">{step.id}</div>
                <div className="step-title">{step.title}</div>
              </div>
            ))}
          </div>
        </div> */}
{/* 
        <div className="step-content">
          {CurrentStepComponent && (
            <CurrentStepComponent
              tripDetails={tripDetails}
              setTripDetails={setTripDetails}
              onNext={() => setCurrentStep(prev => Math.min(prev + 1, steps.length))}
              onBack={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
              isLastStep={currentStep === steps.length}
            />
          )}
        </div> */}
      </div>
    </Layout>
  );
};

export default PlanTrip;