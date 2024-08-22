import { EmailDetailParams } from '@/types';
import * as React from 'react';



export const EmailTemplate: React.FC<Readonly<EmailDetailParams>> = ({
  buyerName,
}) => (
  <div>
    <h1>Welcome, {buyerName}!</h1>
  </div>
);
