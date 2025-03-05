import styles from "./index.module.scss";
interface LobbyRowProps {
  name: String;
  id: String;
  bio: String;
}

const LobbyRow = ({ name, id, bio }: LobbyRowProps) => {
  return (
    <div className={styles.lobbyRow}>
      <details>
        <summary>

            <span>{name}</span>
            <span>{id}</span>

        </summary>
        <div>
          <p>{bio}</p>
        </div>
      </details>
    </div>
  );
};

export default LobbyRow;
