import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import axios from "axios";

const CancelToken = axios.CancelToken;

export default function withData(url) {
  return function(WrappedComponent) {
    class EnhancedComponent extends Component {
      state = {
        loading: true
      };

      componentDidMount() {
        axios
          .get(url, {
            cancelToken: new CancelToken(c => {
              this.cancelToken = c;
            })
          })
          .then(({ data }) => this.setState({ data, loading: false }))
          .catch(error => {
            this.setState({ loading: false });
            if (!axios.isCancel(error)) {
              this.setState({ error });
            }
          });
      }

      componentWillUnmount() {
        if (this.cancelToken) this.cancelToken();
      }

      render() {
        const { forwardedRef, ...restProps } = this.props;
        return (
          <WrappedComponent ref={forwardedRef} {...restProps} {...this.state} />
        );
      }
    }

    hoistNonReactStatic(EnhancedComponent, WrappedComponent);

    return React.forwardRef((props, ref) => (
      <EnhancedComponent {...props} forwardedRef={ref} />
    ));
  };
}
