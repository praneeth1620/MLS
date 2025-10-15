// src/components/PracticeAreaDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/PracticeAreaDetails.css";

const areaDetails = {
  arbitration: {
    title: "Arbitration",
    content:
      "Our Arbitration practice handles domestic and international disputes with expert arbitration lawyers."
  },
  banking: {
    title: "Banking & Finance",
    content:
      "We advise banks, NBFCs, and borrowers on financing structures, debt recovery, and regulatory compliance."
  },
  corporate: {
    title: "Corporate & Commercial",
    content:
      "Our team provides solutions for corporate structuring, M&A, contracts, and compliance advisory."
  },
  // Add rest similarly...
};

const PracticeAreaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const area = areaDetails[id];

  if (!area)
    return (
      <div className="details-container">
        <h2>Practice Area Not Found</h2>
        <button onClick={() => navigate("/practice")}>Back</button>
      </div>
    );

  return (
    <div className="details-container">
      <h1>{area.title}</h1>
      <p>{area.content}</p>
      <button onClick={() => navigate(-1)}>⬅ Back</button>
    </div>
  );
};

export default PracticeAreaDetails;
