import * as React from 'react'
import ui, { FlexColumn, MembersPanel } from '../common/UI'
import List1 from './List1'

class Members extends React.Component<any, any> {
  state = {
    items: []
  }

  render() {
    return (
      <MembersPanel>
        <List1 keyword="redux" />
      </MembersPanel>
    )
  }
}
export default Members
