"use client";

import { useEffect } from "react";

export const ReportView = () => {
  useEffect(() => {
    fetch("/api/increment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return null;
};
