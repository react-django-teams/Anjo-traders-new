import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items, className = '' }) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
            {item.link ? (
              <Link
                to={item.link}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600"
              >
                {item.icon && (
                  <item.icon className="w-3 h-3 mr-2.5" aria-hidden="true" />
                )}
                {item.name}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gray-500">
                {item.icon && (
                  <item.icon className="w-3 h-3 mr-2.5" aria-hidden="true" />
                )}
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
