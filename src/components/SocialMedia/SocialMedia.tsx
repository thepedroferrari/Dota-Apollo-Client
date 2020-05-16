import React from 'react';
import { ISocialMediaAccount } from '../../interfaces';

const SocialMedia = ({ accounts }: { accounts: ISocialMediaAccount[]; }) => (
  <address>{accounts.map((account) => (
    <a key={account.name} href={account.url} target="_blank" rel="noopener noreferrer">
      {account.name}
    </a>
  ))}</address>
);
export default SocialMedia;
