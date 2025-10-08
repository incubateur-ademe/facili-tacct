"use client";
import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

export default function DisconnectButton() {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Se déconnecter
    </Button>
  );
}
