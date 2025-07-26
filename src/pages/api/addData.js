// pages/api/addData.js
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name,
        email,
        createdAt: new Date(),
      });

      res.status(200).json({ message: 'Document written with ID: ' + docRef.id });
    } catch (e) {
      res.status(500).json({ error: 'Error adding document: ' + e.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}