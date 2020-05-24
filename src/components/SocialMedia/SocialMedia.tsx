import React from 'react';
import { ISocialMediaAccount } from '../../interfaces';
import { Address } from './SocialMediaStyles';

const SocialMedia = ({ accounts }: { accounts: ISocialMediaAccount[]; }) => (
  <Address>
    {accounts.map((account) => (
      <a
        key={account.name}
        href={account.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {account.name}
      </a>
    ))}
  </Address>
);
export default SocialMedia;
