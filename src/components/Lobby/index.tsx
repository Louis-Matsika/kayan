import React from "react";
import LobbyRow from "#/components/LobbyRow";

import OMOcloud from "#/data/OMOcloud.json";

import styles from './index.module.scss';

const members = OMOcloud.members;

const Lobby = () => {
  return (
    <div className={styles.lobby}>
      {members.map((member) => (
        <LobbyRow key={member.id} name={member.name} username={member.username} id={member.id}bio={member.bio} />
      ))}
    </div>
  );
};

export default Lobby;
