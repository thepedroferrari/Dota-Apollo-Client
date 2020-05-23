import React from 'react';
import { CountryRegionName, IExtendedPlayer } from '../../interfaces';
import { snakeCase } from '../../utils';

interface Props {
  player: IExtendedPlayer;
  setSelectedPlayer: React.Dispatch<React.SetStateAction<IExtendedPlayer | undefined>>;
}

const PlayerPortrait = ({ player, setSelectedPlayer }: Props) => {
  const { nick_name, country, images } = player;
  const cleanRegionName = snakeCase(country.region.name);

  const handleClick = () => setSelectedPlayer(player);

  return (
    <div className={cleanRegionName} onClick={handleClick}>
      <img
        className="picture"
        src={images.default}
        alt={`Player ${nick_name}`}
      />
      <img
        className="country"
        src={country.images.thumbnail}
        alt=""
        role="presentation"
      />
      <span>{nick_name}</span>
    </div>
  );
};

export default PlayerPortrait;
