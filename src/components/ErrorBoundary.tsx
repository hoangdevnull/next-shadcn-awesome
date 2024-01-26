import type { ErrorInfo, ReactNode } from 'react';
import React, { Component } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line class-methods-use-this
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-background flex h-screen w-screen flex-col items-center justify-center text-center text-white">
          <div className="mb-10 text-xl">Oops, something wrong.</div>
          <button
            className="flex h-10 items-center justify-center bg-pink-600 px-6 text-sm"
            onClick={() => window.location.reload()}
          >
            Click here to reset!
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
