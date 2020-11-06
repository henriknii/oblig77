import React, { useState } from 'react';
import axios from 'axios';

const Progress = () => {
  const [percentage, setPercentage] = useState(0);
  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);

  const download = async () => {
    setProgress('in-progress');
    const data = await axios({
      url: 'https://loremflickr.com/g/10000/10000/paris',
      onDownloadProgress(progressEvent) {
        const progressIndicator = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        setPercentage(progressIndicator);
      },
    });
    if (data.status === 200) {
      setProgress('finished');
      setUrl(data.config.url);
    }
  };

  return (
    <div>
      <button type="button" className="download-button" onClick={download}>
        <span className="button-text">
          {progress === 'finished' ? '🎉 Done' : 'Download'}
        </span>
      </button>
      <span className="percentage"> {percentage}%</span>
      {url && (
        <img
          style={{ marginTop: '20px', maxWidth: '100%' }}
          alt="Paris"
          src={url}
        />
      )}
    </div>
  );
};

export default Progress;
