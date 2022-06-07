import React, {useState} from 'react';

import {Box, LinearProgress} from '@mui/material';

export const LinearDeterminate: React.FC = () => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{width: '100%'}}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
