import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PLAYER_DATA } from './playerQuery';
import { IPlayer } from '../../interfaces';
import { USER_INTL, getPlayerRole } from '../../utils';
import { PlayerGrid } from './PlayerGrid';

interface Props {
  playerId: IPlayer['id'];
}

const Player = ({ playerId }: Props) => {
  const { loading, error, data } = useQuery(GET_PLAYER_DATA, {
    variables: {
      id: Number(playerId),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { player }: { player: IPlayer } = data;
  const {
    first_name,
    nick_name,
    last_name,
    images,
    country,
    roles,
  } = player as IPlayer;

  const firstRole = roles[roles.length - 1]?.from;
  if (!firstRole) return null;

  const firstRoleDate = new Date(firstRole);
  const proPlayerSince = new Intl.DateTimeFormat(USER_INTL).format(
    firstRoleDate
  );

  const displayName =
    first_name && last_name
      ? `${first_name} "${nick_name}" ${last_name}`
      : nick_name;

  const playerRoles = roles && getPlayerRole(roles);

  return (
    <PlayerGrid>
      <img
        src={images.default}
        alt={`Player ${nick_name}`}
        className="picture"
      />
      <header>
        <h4>
          {displayName}
          <img
            src={country.images.thumbnail}
            alt={`${country.name} flag`}
            role="presentation"
          />
        </h4>
        <span>
          {playerRoles?.map((r) => `${r}, `)}since {proPlayerSince}
        </span>
      </header>
    </PlayerGrid>
  );
};

export default Player;
