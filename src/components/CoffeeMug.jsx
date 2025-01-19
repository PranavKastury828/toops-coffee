import React from "react";

const CoffeeMug = () => {
  return (
    <div className="w-32 h-32">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Steam Animations */}
        <style>
          {`
            @keyframes steam1 {
              0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
              50% { transform: translateY(-20px) translateX(-5px) scale(1.2); opacity: 0.5; }
              100% { transform: translateY(-40px) translateX(0) scale(1); opacity: 0; }
            }
            @keyframes steam2 {
              0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
              50% { transform: translateY(-30px) translateX(5px) scale(1.2); opacity: 0.5; }
              100% { transform: translateY(-50px) translateX(0) scale(1); opacity: 0; }
            }
            @keyframes steam3 {
              0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
              50% { transform: translateY(-25px) translateX(-3px) scale(1.1); opacity: 0.5; }
              100% { transform: translateY(-45px) translateX(0) scale(1); opacity: 0; }
            }
            .steam {
              transform-origin: center bottom;
              animation-timing-function: ease-in-out;
              animation-iteration-count: infinite;
            }
            .steam1 { animation: steam1 3s infinite; }
            .steam2 { animation: steam2 3.2s infinite; animation-delay: 0.3s; }
            .steam3 { animation: steam3 2.8s infinite; animation-delay: 0.6s; }
          `}
        </style>

        {/* Steam */}
        <path
          className="steam steam1"
          d="M 90 60 Q 95 50 100 60 Q 105 70 110 60"
          fill="none"
          stroke="#FA932F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="steam steam2"
          d="M 80 70 Q 85 60 90 70 Q 95 80 100 70"
          fill="none"
          stroke="#FA932F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="steam steam3"
          d="M 100 65 Q 105 55 110 65 Q 115 75 120 65"
          fill="none"
          stroke="#FA932F"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Modern Coffee Mug */}
        {/* Main Body - slightly tapered */}
        <path
          d="M 70 80 
             C 70 80, 70 155, 70 155 
             C 70 158, 72 160, 75 160 
             L 125 160 
             C 128 160, 130 158, 130 155 
             C 130 155, 130 80, 130 80 
             C 130 80, 70 80, 70 80"
          fill="#FFC75D"
          stroke="#FCAC31"
          strokeWidth="2"
        />

        {/* Rim detail */}
        <path
          d="M 68 78 
             C 68 75, 70 73, 73 73 
             L 127 73 
             C 130 73, 132 75, 132 78 
             L 132 83 
             C 132 86, 130 88, 127 88 
             L 73 88 
             C 70 88, 68 86, 68 83 
             Z"
          fill="#FCAC31"
        />

        {/* Handle - more angular and modern */}
        <path
          d="M 130 95 
             L 140 95 
             C 145 95, 150 100, 150 105
             L 150 130
             C 150 135, 145 140, 140 140
             L 130 140"
          fill="none"
          stroke="#FCAC31"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Coffee Surface - subtle curve */}
        <path
          d="M 75 90 
             C 85 88, 115 88, 125 90"
          fill="none"
          stroke="#FA932F"
          strokeWidth="2"
        />

        {/* Subtle highlight */}
        <path
          d="M 75 100 
             L 85 100"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CoffeeMug;
