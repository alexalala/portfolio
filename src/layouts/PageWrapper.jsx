import React, {  Component} from 'react';
import styled from 'styled-components';

class PlainPageWrapper extends Component {
  render() {
    return (
      <div className={this.props.className}>
        { this.props.children }
      </div>
    );
  };
};

const PageWrapper = styled(PlainPageWrapper)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin-left: 10%;
  width: 80%;
`;

export default PageWrapper;
