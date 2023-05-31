import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

const DownloadButton = ({ gifUrl, fileName }) => {
    
  const handleDownload = async () => {
    const response = await fetch(gifUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      className="flex justify-end items-start ml-auto bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-2 border-b-4 border-gray-700 hover:border-gray-500 rounded"
      onClick={handleDownload}
      title='Descargar Gif'
    >
      <ArrowDownTrayIcon className="w-4 h-4"/>
    </button>
  );
}

export default DownloadButton;