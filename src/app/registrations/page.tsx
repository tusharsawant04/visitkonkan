"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { Container, Nav, Table, Spinner, Alert, Button } from 'react-bootstrap';

import { db, auth } from '../../backend/lib/firebase'; // Adjust path as needed
import ProtectedRoute from '../../components/ProtectedRoute'; // Adjust path as needed
import Layout from '../../components/layout'; // Adjust path as needed

// Define TypeScript types for our data
interface Registration {
    id: string;
    fullName: string;
    mobile: string;
    pickupLocation: string;
    dob: string;
    submittedAt?: Timestamp;
    [key: string]: any;
}

interface Trek {
    id: string; // e.g., 'naneghat-trek'
    name: string; // e.g., 'Naneghat Trek'
}

// Helper function to format slug into a readable name
const formatTrekName = (slug: string): string => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function RegistrationsPage() {
    const router = useRouter();
    const [treks, setTreks] = useState<Trek[]>([]);
    const [activeTrekId, setActiveTrekId] = useState<string | null>(null);
    const [registrations, setRegistrations] = useState<Record<string, Registration[]>>({});
    const [loadingTreks, setLoadingTreks] = useState<boolean>(true);
    const [loadingRegistrations, setLoadingRegistrations] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // State for error messages

    // Effect 1: Fetch the list of all treks for the tabs
    useEffect(() => {
        const fetchTreks = async () => {
            setLoadingTreks(true);
            setError(null);
            try {
                const tripCollectionRef = collection(db, 'trip');
                const querySnapshot = await getDocs(tripCollectionRef);
                
                const fetchedTreks: Trek[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    name: formatTrekName(doc.id)
                }));
                console.log("Fetched Treks:", fetchedTreks); // Debugging line

                setTreks(fetchedTreks);
                if (fetchedTreks.length > 0) {
                    setActiveTrekId(fetchedTreks[0].id);
                }
            } catch (err) {
                console.error("Error fetching treks: ", err);
                setError("Failed to load trek data. Please check your connection and Firestore rules.");
            } finally {
                setLoadingTreks(false);
            }
        };

        fetchTreks();
    }, []);

    // Effect 2: Fetch registrations for the active trek
    useEffect(() => {
        if (!activeTrekId || registrations[activeTrekId]) return;

        const fetchRegistrationsForTrek = async () => {
            setLoadingRegistrations(true);
            setError(null);
            try {
                // CORRECTED: 'deatils' changed to 'details'
                const detailsSubcollectionRef = collection(db, 'trip', activeTrekId, 'deatils');
                const querySnapshot = await getDocs(detailsSubcollectionRef);

                const fetchedData: Registration[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Registration));

                setRegistrations(prev => ({ ...prev, [activeTrekId]: fetchedData }));
            } catch (err) {
                console.error(`Error fetching registrations for ${activeTrekId}: `, err);
                setError("Failed to load registration details for this trek.");
            } finally {
                setLoadingRegistrations(false);
            }
        };

        fetchRegistrationsForTrek();
    }, [activeTrekId, registrations]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/login');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const currentRegistrations = activeTrekId ? registrations[activeTrekId] : [];

    return (
        <Layout>
            <ProtectedRoute>
                <Container className="mt-5 mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>Trek Registrations</h1>
                        <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                    </div>

                    {/* Display a global error message if something fails */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    {loadingTreks ? (
                        <div className="text-center p-5"><Spinner animation="border" /></div>
                    ) : treks.length === 0 && !error ? ( // Only show if no other error
                        <Alert variant="info">No treks with registrations found.</Alert>
                    ) : (
                        <>
                            <Nav variant="tabs" activeKey={activeTrekId || ''} onSelect={(k) => k && setActiveTrekId(k)}>
                                {treks.map(trek => (
                                    <Nav.Item key={trek.id}>
                                        <Nav.Link eventKey={trek.id}>{trek.name}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>

                            <div className="tab-content mt-3">
                                {loadingRegistrations ? (
                                    <div className="text-center p-5"><Spinner animation="border" /></div>
                                ) : currentRegistrations && currentRegistrations.length > 0 ? (
                                    <Table striped bordered hover responsive>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Full Name</th>
                                                <th>Mobile</th>
                                                <th>Pickup Location</th>
                                                <th>Date of Birth</th>
                                                <th>Submitted At</th>
                                                 <th>amount paid</th>
                                                <th> discounted amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentRegistrations.map((reg, index) => (
                                                <tr key={reg.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{reg.fullName}</td>
                                                    <td>{reg.mobile}</td>
                                                    <td>{reg.pickupLocation}</td>
                                                    <td>{reg.dob}</td>
                                                    <td>
                                                        {reg.submittedAt 
                                                            ? reg.submittedAt.toDate().toLocaleString('en-IN')
                                                            : 'N/A'
                                                        }
                                                    </td>
                                                     <td>₹{reg.finalAmountPaid ?? 0}</td>
                                                     <td>₹{reg.discountGiven ?? 0}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                ) : (
                                    <Alert variant="secondary">No registrations found for this trek.</Alert>
                                )}
                            </div>
                        </>
                    )}
                </Container>
            </ProtectedRoute>
        </Layout>
    );
}