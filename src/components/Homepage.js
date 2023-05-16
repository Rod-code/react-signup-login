import React from 'react'
import "../homepage.css"

function Homepage() {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div className="main-container">
			<nav className="navbar">
				<h1>tech-titans</h1>
				<button className="white-btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
  )
}

export default Homepage