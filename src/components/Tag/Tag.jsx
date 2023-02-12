import React from 'react';

const Tag = (tags) => {
  return (
    <>
      {tags.map((tag) => (
        <div className="tag">
          <p className="tag__text">{tag}</p>
        </div>
      ))}
    </>
  );
};

export default Tag;
