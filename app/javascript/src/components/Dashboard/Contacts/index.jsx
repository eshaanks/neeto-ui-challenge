import React, { useState } from "react";

// @ts-ignore
import { Button } from "neetoui";
// @ts-ignore
import { Container, Header } from "neetoui/layouts";

import Menu from "./Menu";
import Table from "./Table";

const Contacts = () => {
  // TODO: Add add function to fetch contact details from server and render PageLoader component till completion.

  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table />
      </Container>
    </>
  );
};

export default Contacts;
