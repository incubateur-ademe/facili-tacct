import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { Pool } from 'pg';
import { PrismaClient } from '../../generated/client/client';

const connectionString = process.env.SCALINGO_POSTGRESQL_URL;

// Nettoyer l'URL : retirer les paramètres après ?
const cleanConnectionString = connectionString?.split('?')[0];

let sslConfig;
const caPath = join(process.cwd(), 'ca.pem');

// En production, Scalingo injecte le certificat dans le système
// En dev local, on utilise le fichier ca.pem
if (existsSync(caPath)) {
  const ca = readFileSync(caPath, 'utf8');
  sslConfig = {
    ca: ca,
    rejectUnauthorized: false
  };
} else {
  // En production sur Scalingo, ssl: true suffit (certificats système)
  sslConfig = true;
}

const pool = new Pool({
  connectionString: cleanConnectionString,
  ssl: sslConfig,
  max: 5,
  idleTimeoutMillis: 20000
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
