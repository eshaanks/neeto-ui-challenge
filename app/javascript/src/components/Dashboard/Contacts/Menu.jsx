import React, { useState } from "react";

// @ts-ignore
// @ts-ignore
import { Search, Plus, Settings } from "@bigbinary/neeto-icons";
// @ts-ignore
import { Typography } from "neetoui";
// @ts-ignore
import { MenuBar } from "neetoui/layouts";

const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Contacts">
        <MenuBar.Block active count={13} label="All" />
        <MenuBar.Block count={2} label="Archived" />
        <MenuBar.Block count={7} label="Completed" />
        <MenuBar.Block count={4} label="Phase 2" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
      </MenuBar>
    </div>
  );
};

export default Menu;