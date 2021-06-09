import React from "react";

const Base = ({
  title = "my title",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div className="bg-dark">
     
      <div className="container-fluid">
        <div className="ml-auto mr-auto">
          <h2 className="text-white text-center">{title}</h2>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer style={{position:"fixed","bottom":0,"width":"100%"}} className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center">
          <h4>if u got any question ,feel free to reach out</h4>
          <button className="btn btn-warning btn-lg">contact us</button>
        </div>
        
      </footer>
    </div>
  );
};
export default Base;
