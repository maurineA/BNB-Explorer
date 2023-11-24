import React, { useState, useEffect } from 'react';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://bnb-api-pkhn.onrender.com/Reviews';

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch reviews');
        }
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []); 

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.name}:</strong> {review.review}
            </li>
          ))}
        </ul>
      ) : (
        <h2>No more reviews available</h2>
      )}
    </div>
  );
};

export default ReviewList;