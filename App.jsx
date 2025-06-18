import React from 'react';

// PUBLIC_INTERFACE
class App extends React.Component {
  /**
   * This is the top-level App component. It renders the main app shell.
   */
  render() {
    return (
      <div style={{
        backgroundColor: "transparent",
        color: "inherit",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2em"
      }}>
        simon, helloworld!!!
      </div>
    );
  }
}

export default App;
