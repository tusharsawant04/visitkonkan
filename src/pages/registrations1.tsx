// src/pages/registrations.tsx
// (Add these imports and changes to your existing file)
"use client";
import ProtectedRoute from '../components/ProtectedRoute';
import { Button } from 'react-bootstrap';
import { auth } from '../backend/lib/firebase'; // Adjust the import path as necessary
import { Container } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Layout from '../components/layout';
// ... other imports

export default function RegistrationsPage() {
    const router = useRouter();
    // ... all your existing states and functions (useState, useEffect, etc.)

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/login');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };
    
    return (
          <Layout>
        <ProtectedRoute>
            <Container className="mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1>Trek Registrations</h1>
                    <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                </div>

                {/* ... All your existing Nav, Table, and Alert JSX ... */}
                
            </Container>
        </ProtectedRoute>
        </Layout>
    );
}