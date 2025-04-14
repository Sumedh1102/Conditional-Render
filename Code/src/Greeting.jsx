import React from 'react';

function ConditionalExample({ isLoggedIn, isAdmin, status, user }) {
  // 1. if statement
  let greetingMessage;
  if (isLoggedIn) {
    greetingMessage = "Welcome back!";
  } else {
    greetingMessage = "Please sign in.";
  }

  // 4. switch statement
  const renderStatus = () => {
    switch (status) {
      case "loading":
        return <p>Status: Loading...</p>;
      case "success":
        return <p>Status: Success!</p>;
      case "error":
        return <p>Status: Error!</p>;
      default:
        return <p>Status: Unknown</p>;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>1. If Statement</h2>
      <p>{greetingMessage}</p>

      <h2>2. Ternary Operator</h2>
      <p>{isLoggedIn ? "You're logged in." : "You're not logged in."}</p>

      <h2>3. Logical AND (&&)</h2>
      {isAdmin && <button>Delete All Users</button>}

      <h2>4. Switch Statement</h2>
      {renderStatus()}

      <h2>5. IIFE (Immediately Invoked Function Expression)</h2>
      {(() => {
        if (!user) return <p>User: Guest</p>;
        if (user.role === "admin") return <p>User: Admin</p>;
        return <p>User: {user.name}</p>;
      })()}
    </div>
  );
}

export default ConditionalExample;
