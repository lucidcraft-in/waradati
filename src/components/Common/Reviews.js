import React from 'react'

export default function Reviews({ rating }) {
 
  return (
    <ul>
      <li>
        <span
          style={{
            color: rating >= 1 ? '#f5e705' : '',
            fontSize: '20px',
          }}
        >
          <i className="icon-star"></i>
        </span>
      </li>
      <li>
        <span
          style={{
            color: rating >= 2 ? '#f5e705' : '',
            fontSize: '20px',
          }}
        >
          <i className="icon-star"></i>
        </span>
      </li>
      <li>
        <span
          style={{
            color: rating >= 3 ? '#f5e705' : '',
            fontSize: '20px',
          }}
        >
          <i className="icon-star"></i>
        </span>
      </li>
      <li>
        <span
          style={{
            color: rating >= 4 ? '#f5e705' : '',
            fontSize: '20px',
          }}
        >
          <i className="icon-star"></i>
        </span>
      </li>
      <li>
        <span
          style={{
            color: rating >= 5 ? '#f5e705' : '',
            fontSize: '20px',
          }}
        >
          <i className="icon-star"></i>
        </span>
      </li>
    </ul>
  );
}
