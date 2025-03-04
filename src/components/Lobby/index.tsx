import React from "react";
import LobbyRow from "#/components/LobbyRow";

import OMOcloud from "#/data/OMOcloud.json";

const members = OMOcloud.members;

const Lobby = () => {
  return (
    <div>
      {members.map((member) => (
        <LobbyRow key={member.id} name={member.name} bio={member.bio} />
      ))}
    </div>
  );
};

export default Lobby;
