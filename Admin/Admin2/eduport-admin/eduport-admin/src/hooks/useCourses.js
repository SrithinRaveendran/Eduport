import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { API } from "../constants";

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setFetchError("");

      const response = await axios.get(API);
      console.log(response,'response')

      const data = response.data;

      setCourses(
        Array.isArray(data)
          ? data
          : data?.courses || []
      );
    } catch (error) {
      setFetchError(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return {
    courses,
    loading,
    fetchError,
    fetchCourses,
  };
}