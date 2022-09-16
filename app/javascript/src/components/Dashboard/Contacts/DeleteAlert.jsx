import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = () => {
    onClose();
    Toastr.success("Contact deleted successfully");
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to delete contact? These changes cannot be undone."
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
