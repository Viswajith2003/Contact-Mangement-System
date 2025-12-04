import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, errInfo) {
    console.error("Error caught by ErrorBoundary", err, errInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ textAlign: "center", color: "red", marginTop: "400px" }}>
          Something went wrong.
        </h2>
      );
    }
    return this.props.children;
  }
}
