import React from "react";
import { Avatar, Tooltip } from "antd";

function AvatarProfile() {
  return (
    <>
      <Avatar.Group
        size="large"
        style={{
          display: "block",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Tooltip title="Ant User" placement="bottom">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
        </Tooltip>
      </Avatar.Group>
    </>
  );
}

export default AvatarProfile;
