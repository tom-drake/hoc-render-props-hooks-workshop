import { Component } from "react";
import axios from "axios";

const CancelToken = axios.CancelToken;

export default class DataLoader extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    axios
      .get(this.props.url, {
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
    return this.props.children({ ...this.state });
  }
}
