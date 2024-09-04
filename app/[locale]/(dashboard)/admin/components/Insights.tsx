"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Insights = () => {
  const [insights, setInsights] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get("/api/admin/dashboard", {
          params: {
            access_token: process.env.FACEBOOK_ACCESS_TOKEN,
            pixel_id: process.env.FACEBOOK_PIXEL_ID,
          },
        });
        setInsights(response.data);
      } catch (error) {
        console.error("Error fetching insights:", error);
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.error || error.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };
    fetchInsights();
  }, []);

  return (
    <div className="px-4 pt-6 text-gray-900 dark:text-gray-100">
      {error ? (
        <div className="text-red-500">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      ) : insights ? (
        <div>
          <h2>Facebook Pixel Insights</h2>
          <pre>{JSON.stringify(insights, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading insights...</p>
      )}
    </div>
  );
};

export default Insights;
