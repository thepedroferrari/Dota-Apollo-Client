import { TQualified, IRoster } from '../interfaces';
const DPC_TO_QUALIFY = 3690;
const NUMBER_OF_TEAMS_TO_QUALIFY = 12;

export const getRosterStatus = (
  dpc: IRoster['dpc_points'],
  position: number | undefined = undefined
): TQualified => {
  const status: TQualified = dpc > DPC_TO_QUALIFY
    ? 'Invited'
    : position && position < NUMBER_OF_TEAMS_TO_QUALIFY // position starts at 0
      ? 'Qualified'
      : 'Not Qualified';

  return status;
};
