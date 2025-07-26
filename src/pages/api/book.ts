// pages/api/book.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../backend/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message, experience } = req.body;

  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      name,
      email,
      phone,
      message,
      experience,
      createdAt: Timestamp.now(),
    });

    res.status(200).json({ message: 'Booking stored successfully', id: docRef.id });
  } catch (error) {
    console.error('Error adding document:', error);
    res.status(500).json({ message: 'Failed to store booking' });
  }
}
