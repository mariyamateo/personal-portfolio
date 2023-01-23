import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const SimpleProgressBar = ({rate}) => {
  return (
    <ProgressBar
      isLabelVisible={false}
      completed={rate}
      maxCompleted={100}
      bgColor="linear-gradient(90deg, #7477FF 0%, #956AA6 100%)"
      baseBgColor="#EAEAFF"
      height="8px"
      borderRadius="4px"
      animateOnRender={true}
    />
  );
};
export default SimpleProgressBar;