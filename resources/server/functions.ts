import { ESX, getSource } from './server';

export async function useIdentifier() {
  const identifier = ESX.GetPlayerFromId(getSource()).getIdentifier();
  return identifier;
}

export async function usePlayerName() {
  const name = ESX.GetPlayerFromId(getSource()).getName()
  return name;
}