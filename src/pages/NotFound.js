import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/webinar-room");
  }, [navigate]);

  return <div className="flex items-center justify-center">NotFound</div>;
};

export default NotFound;
