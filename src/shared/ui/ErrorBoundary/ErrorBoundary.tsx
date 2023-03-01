import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode,
  component?: ReactNode
}

interface ErrorBoundaryStates {
  hasError: boolean
}

export class ErrorBoundary
  extends Component<ErrorBoundaryProps, ErrorBoundaryStates> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ERROR",errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const {
      children,
      component = <div>Не предвиденная ошибка</div>,
    } = this.props;

    if (hasError) {
      return component;
    }

    return children;
  }
}
