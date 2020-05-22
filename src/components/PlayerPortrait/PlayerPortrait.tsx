import React from 'react';
import { IPlayer, CountryRegionName } from '../../interfaces';

interface Props {
  regionName: CountryRegionName;
  nickName: IPlayer['nick_name'];
  playerImage: string;
  countryImage: string;
}

const PlayerPortrait = ({ countryImage, nickName, playerImage, regionName }: Props) => {



  const cleanRegionName = regionName.replace(/ /g, '_').toLowerCase();

  return (
    <div className={cleanRegionName}>
      <img
        className="picture"
        src={playerImage}
        alt={`Player ${nickName}`}
      />
      <img
        className="country"
        src={countryImage}
        alt=""
        role="presentation"
      />
      <span>{nickName}</span>
    </div>
  );
};

export default PlayerPortrait;
