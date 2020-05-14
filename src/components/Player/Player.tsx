import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PLAYER_DATA } from './playerQuery';
import { ISocialMediaAccount, IPlayer } from '../../interfaces';
import { USER_INTL } from '../../utils/constants';

interface Props {
  playerId: IPlayer['id'];
}

const Player = ({ playerId }: Props) => {
  const { loading, error, data } = useQuery(GET_PLAYER_DATA, {
    variables: {
      id: Number(playerId)
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { player } = data;
  const { first_name, nick_name, last_name, images, social_media_accounts, country, roles } = player as IPlayer;

  const firstRole = new Date(String([roles.length - 1]));
  const proPlayerSince = new Intl.DateTimeFormat(USER_INTL).format(firstRole);

  const displayName = first_name && last_name
    ? `${first_name} "${nick_name}" ${last_name}`
    : nick_name;

  return (
    <div>
      <h1>{displayName} <img src={country.images.thumbnail} alt="" role="presentation" /></h1>
      <img src={images.default} alt={`Player ${nick_name}`} />

      <div>
        Pro Player since: {proPlayerSince}
      </div>

      <footer>
        {social_media_accounts.map((account: ISocialMediaAccount) => (
          <a key={account.name} href={account.url} target="_blank" rel="noopener noreferrer">{account.name}</a>
        ))}
      </footer>

    </div>
  );
};

export default Player;
