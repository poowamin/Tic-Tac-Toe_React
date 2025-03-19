export default function Player({name, symbol}) {
  return (
    <li>
      <span className="player">
        <span classNames="player-name">{name}</span>
        <span classNames="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
