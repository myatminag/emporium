'use client';
import React, { useState } from 'react';

const BrandDescription = ({ description }: { description: string }) => {
  const [showDescription, setShowDescription] = useState(false);
  const toggleText = () => {
    setShowDescription((prevState) => !prevState);
  };
  const renderText = () => {
    if (description.length <= 300) {
      return description;
    }
    if (description.length > 300) {
      if (showDescription) {
        return (
          <>
            {description}
            <button className="ml-2 text-sm text-blue-500" onClick={toggleText}>
              {' '}
              See less
            </button>
          </>
        );
      } else {
        const truncatedDescription = description.substring(0, 300) + '...';
        return (
          <>
            {truncatedDescription}
            <button className="text-sm text-blue-500" onClick={toggleText}>
              See more
            </button>
          </>
        );
      }
    }
  };
  return <div>{renderText()}</div>;
};

export default BrandDescription;
