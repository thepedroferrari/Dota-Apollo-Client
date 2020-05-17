import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PLAYER_DATA } from './playerQuery';
import { ISocialMediaAccount, IPlayer } from '../../interfaces';
import { USER_INTL } from '../../utils/constants';
import { getPlayerRole } from '../../utils';
import SocialMedia from '../SocialMedia/SocialMedia';

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

  const { player }: { player: IPlayer; } = data;
  const { first_name, nick_name, last_name, images, social_media_accounts, country, roles } = player as IPlayer;

  const firstRole = roles[roles.length - 1].from;
  const firstRoleDate = new Date(firstRole);
  const proPlayerSince = new Intl.DateTimeFormat(USER_INTL).format(firstRoleDate);

  const displayName = first_name && last_name
    ? `${first_name} "${nick_name}" ${last_name}`
    : nick_name;

  const playerRoles = roles && getPlayerRole(roles);

  return (
    <section>
      <header>
        <h1>
          {displayName}{' '}<img src={country.images.thumbnail} alt={`${country.name} flag`} role="presentation" />
        </h1>
      </header>
      <img src={images.default} alt={`Player ${nick_name}`} />

      <div>
        Pro Player since: {proPlayerSince}
        <br />
        Role{playerRoles && playerRoles.length > 1 && 's'}:{playerRoles?.map(r => ` ${r}`)}.
      </div>

      <SocialMedia accounts={social_media_accounts} />
    </section>
  );
};

export default Player;
