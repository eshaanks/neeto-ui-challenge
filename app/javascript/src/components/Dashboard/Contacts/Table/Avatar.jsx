import React from "react";

// @ts-ignore
import { Avatar as NeetoUIAvatar, Typography } from "neetoui";

const Avatar = ({ name }) => (
  <div className="flex flex-row items-center">
    <NeetoUIAvatar
      className="mr-3"
      size="medium"
      user={{
        imageUrl: "https://i.pravatar.cc/300",
      }}
    />
    <Typography className="text-black" style="h5">
      {name}
    </Typography>
  </div>
);
export default Avatar;
