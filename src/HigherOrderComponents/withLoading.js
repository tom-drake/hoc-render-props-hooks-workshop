import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function withLoading(WrappedComponent) {
  class EnhancedComponent extends Component {
    render() {
      const { data, loading, error, ...rest } = this.props;
      if (loading) {
        return <CircularProgress />;
      }
      if (error) {
        throw error;
      }
      return <WrappedComponent data={data} {...rest} />;
    }
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent);

  return React.forwardRef((props, ref) => (
    <EnhancedComponent {...props} forwardedRef={ref} />
  ));
}
