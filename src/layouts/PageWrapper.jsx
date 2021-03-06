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
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export default PageWrapper;
