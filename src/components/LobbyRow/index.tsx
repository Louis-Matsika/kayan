interface LobbyRowProps {
  name: String;
  bio: String;
}

const LobbyRow = ({ name, bio }: LobbyRowProps) => {
  return (
    <div>
      <details>
        <summary>{name}</summary>
        <div>
          <p>{bio}</p>
        </div>
      </details>
    </div>
  );
};

export default LobbyRow;
