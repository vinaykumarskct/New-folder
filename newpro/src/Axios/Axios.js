import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [apidata, setApidata] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setApidata(null); // Reset apidata if search term is empty
      return;
    }

    // Perform the API request when the search term changes
+    axios.get(`https://jsonplaceholder.typicode.com/todos?q=${searchTerm}`)
      .then(response => {
        // Assuming you want to display the title of the first result
        if (response.data.length > 0) {
          setApidata(response.data[0].title);
        } else {
          setApidata('No results found');
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [searchTerm]); // Trigger the effect when the search term changes

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h1>{apidata}</h1>
    </div>
  );
}

export default Axios;
