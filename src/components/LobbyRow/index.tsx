import styles from "./index.module.scss";
interface LobbyRowProps {
  name: String;
  username: String;
  id: String;
  bio: String;
}

const LobbyRow = ({ name, username, id, bio }: LobbyRowProps) => {
  return (
    <div className={styles.lobbyRow}>
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
        <div>
          <p>{bio}</p>
        </div>
      </details>
    </div>
  );
};

export default LobbyRow;
