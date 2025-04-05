import React from "react";

import OMOcloud from "#/data/OMOcloud.json";
import MemberBanner from "#/components/MemberBanner"

import styles from './index.module.scss';

const members = OMOcloud.members;

interface LobbyRowProps {
  name: String;
  username: String;
  id: String;
  bio: String;
}

const LobbyRow = ({ name, username, id }: LobbyRowProps) => {
  return (
    <div className={`${styles.lobbyRow} ${styles.flare} ${styles[username]}`} >
      <details>
        <summary>
          <span>{name}</span>
          <span>
            <img
              src={`/member-assets/emblems/${username}-emblem.png`}
              alt={`${name}'s emblem`}
            ></img>
            <p>{id}</p>
          </span>
        </summary>
        <MemberBanner username={username}/>
      </details>
    </div>
  );
};


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
