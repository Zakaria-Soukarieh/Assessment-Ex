import React, { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/api/goals")
			.then(async (response) => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response statusText
					const error = (data && data.message) || response.statusText;
					return Promise.reject(error);
				}

				this.setData({ totalReactPackages: data.total });
			})
			.catch((error) => {
				this.setData({ errorMessage: error.toString() });
				console.error("There was an error!", error);
			});
	}, []);

	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>
					<h2>{item.phone}</h2>
					<p>{item.age}</p>
					<p>{item.text}</p>
				</div>
			))}
		</div>
	);
}

export default App;
