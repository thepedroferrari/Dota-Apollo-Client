import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PLAYER_DATA } from './playerQuery';
import { ISocialMediaAccount } from '../../interfaces';

interface Props {
  playerId: number;
}

const Player = ({ playerId }: Props) => {
  const { loading, error, data } = useQuery(GET_PLAYER_DATA, {
    variables: {
      id: playerId
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { player } = data;
  const { first_name, nick_name, last_name, images, social_media_accounts, country, roles } = player;

  console.log('MEEEH', first_name, nick_name, last_name, images, social_media_accounts, country, roles);
  const proPlayerSince = String(new Date(roles[roles.length - 1].from));

  return (
    <div>
      <h1>{first_name && first_name} {nick_name} {last_name} FROMMMM: {country.name} <img src={country.images.thumbnail} alt="" role="presentation" /></h1>
      <img src={images.default} alt={`Picture of the player ${nick_name}`} />

      <div>
        Pro Player since: {proPlayerSince}
      </div>

      <footer>
        {social_media_accounts.map((account: ISocialMediaAccount) => (
          <a href={account.url} target="_blank">{account.name}</a>
        ))}
      </footer>

    </div>
  );
};

export default Player;
