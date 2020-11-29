import { ESX, getSource } from './server';
import { pool } from './db';

interface IName {
  firstname: string;
  lastname: string;
}

export async function useIdentifier() {
  const identifier = ESX.GetPlayerFromId(getSource()).getIdentifier();
  return identifier;
}

export async function usePlayerName(identifier: string): Promise<string> {
  const query = "SELECT firstname, lastname FROM users WHERE identifier = ? "
  const [results] = await pool.query(query, [identifier])
  const name = <IName[]>results;
  const fullName = `${name[0].firstname} ${name[0].lastname}`
  return fullName
}