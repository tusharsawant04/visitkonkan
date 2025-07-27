// src/pages/api/sign-cloudinary.ts

import { v2 as cloudinary } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const { trekSlug } = req.body;

      // --- CHANGE HERE ---
      // We are now signing the 'access_mode' parameter instead of 'type'
      const paramsToSign = {
        timestamp: timestamp,
        access_mode: 'authenticated', // Use the more explicit access_mode
        folder: `registrations/${trekSlug || 'general'}`,
        type: 'authenticated', // Ensure type is set to 'authenticated'
      };
      
      const signature = cloudinary.utils.api_sign_request(
        paramsToSign,
        cloudinary.config().api_secret as string
      );

      res.status(200).json({ signature, timestamp, folder: paramsToSign.folder });
    } catch (error) {
      console.error('Error creating Cloudinary signature:', error);
      res.status(500).json({ error: 'Failed to create signature' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}