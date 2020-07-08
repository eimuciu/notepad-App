import React, { useState } from "react";

const WithLoader = Component => {
  const NewComponent = props => {
    const [loading, setLoading] = useState(true);
    function changeLoadingStatus() {
      setLoading(false);
    }
    return (
      <Component
        {...props}
        loading={loading}
        changeLoadingStatus={changeLoadingStatus}
        setLoading={setLoading}
      />
    );
  };
  return NewComponent;
};

export default WithLoader;
