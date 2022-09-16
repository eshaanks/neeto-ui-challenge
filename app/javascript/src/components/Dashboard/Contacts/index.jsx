import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  // TODO: Add add function to fetch contact details from server and render PageLoader component till completion.

  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(prevState => !prevState)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table setShowDeleteAlert={setShowDeleteAlert} />
      </Container>
      <NewContactPane
        setShowPane={setShowNewContactPane}
        showPane={showNewContactPane}
      />
      {showDeleteAlert && (
        <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
      )}
    </>
  );
};

export default Contacts;
