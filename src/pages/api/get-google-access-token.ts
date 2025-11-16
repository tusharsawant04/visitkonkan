import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    const accessToken = await auth.getAccessToken();

    res.status(200).json({ accessToken });
  } catch (err) {
    console.error("Token Error:", err);
    res.status(500).json({ error: "Failed to get token" });
  }
}
