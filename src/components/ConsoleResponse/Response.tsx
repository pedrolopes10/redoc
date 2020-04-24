import * as React from 'react';
import { RightPanelHeader } from '../../common-elements';
import styled from '../../styled-components';

import { JsonViewer } from '../JsonViewer/JsonViewer';

interface ConsoleResponseProps {
  response: any;
}

interface ConsoleResponseState {
  collapse: boolean;
}

export class ConsoleResponse extends React.PureComponent<
  ConsoleResponseProps,
  ConsoleResponseState
  > {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  changeCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const {
      response: { type, status, statusText, content },
    } = this.props;
    return (
      <>
        <RightPanelHeader> Status: </RightPanelHeader>
        <StatusWrapper className={'status-' + type}>
          {' '}
          {status} {statusText}
        </StatusWrapper>
        <RightPanelHeader> Response Payload </RightPanelHeader>
        <JsonWrapper>
          <JsonViewer data={content!} />
        </JsonWrapper>
      </>
    );
  }
}

const JsonWrapper = styled.div`
  color: white;
  background-color: ${props => props.theme.codeSample.backgroundColor};
  padding: 10px;
  margin: 10px 0;
`;

const StatusWrapper = styled.div`
  &.status-success {
    color: #00ff1c;
  }
  &.status-redirect {
    color: ${props => props.theme.colors.responses.redirect.color};
  }
  &.status-info {
    color: ${props => props.theme.colors.responses.info.color};
  }
  &.status-error {
    color: ${props => props.theme.colors.responses.error.color};
  }
  color: white;
  background-color: ${props => props.theme.codeSample.backgroundColor};
  padding: 10px;
  margin: 10px 0;
`;
