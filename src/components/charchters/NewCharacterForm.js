import React, { useState } from 'react';

function NewCharacterForm() {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [ancestry, setAncestry] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/addWizard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, house, ancestry, birthday, gender }), // Include gender in the request body
      });

      if (response.ok) {
        alert('Wizard has been made successfully!');
        setName('');
        setHouse('');
        setAncestry('');
        setBirthday('');
        setGender('');
        setShowForm(false);
      } else {
        console.error('Failed to add wizard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setName('');
    setHouse('');
    setAncestry('');
    setBirthday('');
    setGender('');
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            House:
            <input
              type="text"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
            />
          </label>
          <label>
            Ancestry:
            <input
              type="text"
              value={ancestry}
              onChange={(e) => setAncestry(e.target.value)}
            />
          </label>
          <label>
            Birthday:
            <input
              type="text"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <button type="submit">Add Wizard</button>
          <button type="button" onClick={handleCloseForm}>Close Form</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add New Character</button>
      )}
    </div>
  );
}

export default NewCharacterForm;