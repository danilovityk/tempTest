import React, { useState, useEffect } from 'react';

export default function Post() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/retrieveData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (data.length > 0) {
    return (
      <>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-300 px-4 py-2">First Name</th>
                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                <th className="border border-gray-300 px-4 py-2">Age</th>
                <th className="border border-gray-300 px-4 py-2">Telegram</th>
                <th className="border border-gray-300 px-4 py-2">WhatsApp</th>
                <th className="border border-gray-300 px-4 py-2">Delete Record</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-black-100" : "bg-gray-400"}>
                  <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.telegram ? user.telegram : 'Null'}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.whatsApp ? user.whatsApp : 'Null'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return <h1>No data available</h1>;
}
