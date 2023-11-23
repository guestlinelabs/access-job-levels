import { useState, useEffect } from "react";
import { JobProfile } from "./JobProfile";
import { parseJobProfile } from "./parseJobProfile";

export function useJobProfile(url:string) {
    const [data, setData] = useState<JobProfile|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any|null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const text = await response.text();
          const profile = parseJobProfile(text)
          // Parse the text file here if needed
          setData(profile);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]); // The hook will run every time the URL changes
  
    return { data, loading, error };
  };
  