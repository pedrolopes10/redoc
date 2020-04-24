import * as React from 'react';

import { ClipboardService } from '../../services';

interface SelectOnClickProps {
  onSelectUrl: () => void;
}

export class SelectOnClick extends React.PureComponent<SelectOnClickProps> {
  private child: HTMLDivElement | null;
  handleClick = () => {
    ClipboardService.selectElement(this.child);
    this.props.onSelectUrl();
  };

  render() {
    const { children } = this.props;
    return (
      <div style={{ width: '100%' }} ref={el => (this.child = el)} onClick={this.handleClick.bind(this, children)}>
        {children}
      </div>
    );
  }
}
