import React from "react";

// @ts-ignore
import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
// @ts-ignore
import { Typography, Dropdown, Tag, Avatar, Tooltip } from "neetoui";

import {
  calculateCreatedDayAndTime,
  calculateCreatedAgo,
} from "utils/dayjs 4.31.02 PM";

export const NoteCard = ({ handelDeleteClick, handleEditClick, note }) => (
  <div className="mt-4 w-full border-2 p-4 shadow">
    <div>
      <div className="flex w-full justify-between">
        <Typography style="h4">{note.title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <li onClick={() => handleEditClick(note)}>Edit</li>
          <li onClick={() => handelDeleteClick(note.id)}>Delete</li>
        </Dropdown>
      </div>
      <Typography className="text-gray-500" style="body2">
        {note.description}
      </Typography>
      <hr className="mt-3" />
    </div>
    <div className="mt-3.5 flex w-full justify-between text-gray-500">
      <Tag className="bg-gray-100" label="Getting Started" />
      <div className="flex items-center">
        <div className="mr-1.5">
          <Clock size={12} />
        </div>
        <Tooltip
          content={calculateCreatedDayAndTime(note.created_at)}
          position="bottom-start"
        >
          <Typography className="mr-2 pb-0.5" style="body2">
            Created {calculateCreatedAgo(note.created_at)}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
      </div>
    </div>
  </div>
);
