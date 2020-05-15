import { TQualified, IRoster } from '../interfaces';
import { DPC_TO_QUALIFY, NUMBER_OF_TEAMS_TO_QUALIFY } from './constants';

export const getRosterStatus = (
  dpc: IRoster['dpc_points'],
  position: number | undefined = undefined
): TQualified => {
  const status: TQualified =
    dpc > DPC_TO_QUALIFY
      ? 'Invited'
      : position && position < NUMBER_OF_TEAMS_TO_QUALIFY // position starts at 0
      ? 'Qualified'
      : 'Not Qualified';

  return status;
};
