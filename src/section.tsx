import React from 'react';

export default function Section({ children, label, ...props }: any) {
  if (!label || label.length === 0) props.style = { marginTop: '10px' };
  return (
    <div {...props} className="Section">
      <h3 className="Label">{label}</h3>
      {children}
    </div>
  );
}
