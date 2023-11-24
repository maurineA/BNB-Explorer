import React, { useState } from 'react';

function PostingForm() {
  const [inputData, setInputData] = useState({
    name: "",
    image: "",
    Description: "",
    Adress: "",
    Bedrooms: 1,
    Beds: 1,
    Bathrooms: 1,
    Status: "Choose",
    AOB: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const apiUrl = 'https://bnb-api-pkhn.onrender.com/Rooms';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Property data submitted successfully');
          alert('Property data submitted successfully');

          // Reset the form after successful submission
          setInputData({
            name: "",
            image: "",
            Description: "",
            Adress: "",
            Bedrooms: 1,
            Beds: 1,
            Bathrooms: 1,
            Status: "Choose",
            AOB: ""
          });
        } else {
          console.error('Failed to submit property data');
          alert('Failed to submit property data');
        }
      })
      .catch((error) => {
        console.error('Error submitting property data:', error);
        alert('Error submitting property data');
      });
  }

  return (
    <>
      <h1>POST YOUR PROPERTY</h1>
       <figure>
       <img

src="https://images.pexels.com/photos/8152733/pexels-photo-8152733.jpeg?auto=compress&cs=tinysrgb&w=800
"
alt="Try Again"
style={{
  //display:"flex",
  textAlign:"right"
}}
    
/>
<figcaption> <em> Thanks for trusting us with your property</em></figcaption>
       </figure>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <strong>Name:</strong>
          <input
            type="text"
            name="name"
            placeholder="The name of your BNB"
            value={inputData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="Image">
          <strong>Image URL:</strong>
          <input
            type="text"
            name="image"
            placeholder="Enter the URL of your property image"
            value={inputData.Url}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="Description">
          <strong>Description:</strong>
          <input
            type="text"
            name="Description"
            placeholder="Describe your BNB"
            value={inputData.Description}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="Adress">
          <strong>Address:</strong>
          <input
            type="text"
            name="Adress"
            placeholder="Where is your BNB located"
            value={inputData.Adress}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="Bedrooms">
          <strong>Bedrooms:</strong>
          <input
            type="number"
            name="Bedrooms"
            placeholder="Number of bedrooms"
            value={inputData.Bedrooms}
            onChange={handleChange}
            min={1}
            max={10}
            required
          />
        </label>
        <label htmlFor="Beds">
          <strong>Beds:</strong>
          <input
            type="number"
            name="Beds"
            placeholder="Number of beds available"
            value={inputData.Beds}
            onChange={handleChange}
            min={1}
            max={10}
            required
          />
        </label>
        <label htmlFor="Bathrooms">
          <strong>Bathrooms:</strong>
          <input
            type="number"
            name="Bathrooms"
            placeholder="Number of Bathrooms"
            value={inputData.Bathrooms}
            onChange={handleChange}
            min={1}
            max={10}
            required
          />
        </label>
        <label htmlFor="status">
          <strong>Status:</strong>
          <select
            name="Status"
            value={inputData.Status}
            onChange={handleChange}
            required
          >
            <option value="Choose">Choose</option>
            <option value="Not Reserved">Not Reserved</option>
            <option value="Reserved">Reserved</option>
          </select>
        </label>
        <label htmlFor="AOB">
          <strong>Tell us more:</strong>
          <input
            type="text"
            name="AOB"
            placeholder="Anything that makes your BNB unique"
            value={inputData.AOB}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default PostingForm;