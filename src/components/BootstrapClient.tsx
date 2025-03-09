"use client"; // Ensures this runs only on the client side

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded"))
      .catch((err) => console.error("Bootstrap JS failed to load", err));
  }, []);

  return null; // This component does not render anything, just loads Bootstrap JS
}
