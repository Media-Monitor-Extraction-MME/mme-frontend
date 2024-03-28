import { Grid } from '@tremor/react';
import React from 'react';

interface SidebarProps {
  data: string; // Add a data prop of type string
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  // Implement your sidebar component here
  return (
    <Grid numItems={2}>
      <div className="sidebar"></div>
      <div>{props.data}</div>
    </Grid>
  );
};

export default Sidebar;
