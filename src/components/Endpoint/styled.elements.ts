import styled from '../../styled-components';

export const OperationEndpointWrap = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
  .showToolTip {
    visibility: initial;
    background-color: white;
    color: black;
    padding: 3px;
    position: initial;
    width: 53px;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .hideToolTip {
    visibility: hidden;
    padding: 3px;
    position: initial;
    width: 53px;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 4px;
  }
`;

export const ServerRelativeURL = styled.span`
  font-family: ${props => props.theme.typography.code.fontFamily};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const EndpointInfo = styled.div<{ expanded?: boolean; inverted?: boolean }>`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${props => (props.inverted ? '10px' : '20px')};
  border-radius: ${props => (props.inverted ? '0' : '4px 4px 0 0')};
  background-color: ${props =>
    props.inverted ? 'transparent' : props.theme.codeBlock.backgroundColor};
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${props => (props.inverted ? '0' : '1px solid transparent')};
  border-bottom: ${props => (props.inverted ? '1px solid #ccc' : '0')};
  transition: border-color 0.25s ease;
  direction: ltr;

  ${props =>
    (props.expanded && !props.inverted && `border-color: ${props.theme.colors.border.dark};`) || ''}

  .${ServerRelativeURL} {
    color: ${props => (props.inverted ? props.theme.colors.text.primary : '#ffffff')}
  }
  &:focus {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(128, 128, 128, 0.25);
  }
`;

export const HttpVerb = styled.span.attrs((props: { type: string; compact?: boolean }) => ({
  className: `http-verb ${props.type}`,
})) <{ type: string; compact?: boolean }>`
  font-size: ${props => (props.compact ? '0.8em' : '0.929em')};
  line-height: ${props => (props.compact ? '18px' : '20px')};
  background-color: ${props => props.theme.colors.http[props.type] || '#999999'};
  color: #ffffff;
  padding: ${props => (props.compact ? '2px 8px' : '3px 10px')};
  text-transform: uppercase;
  font-family: ${props => props.theme.typography.headings.fontFamily};
  margin: 0;
`;

export const ServersOverlay = styled.div<{ expanded: boolean }>`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: #fafafa;
  color: #263238;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.25s ease;
  ${props => (props.expanded ? '' : 'transform: translateY(-50%) scaleY(0);')}
`;

export const ServerItem = styled.div`
  padding: 10px;
  background-color: #002c2d;
  color: white;
  display: flex;
  flex-wrap: nowrap;
  &.selected {
    background-color: #3c7173;
  }
`;

export const ServerUrl = styled.div`
  text-align: left;
  user-select: none;
  padding: 5px !important;
  background-color: #ffffff33;
  word-break: break-all;
  width: 100% !important;
  color: #00ff1c;
  > span {
    color: white;
  }
`;
