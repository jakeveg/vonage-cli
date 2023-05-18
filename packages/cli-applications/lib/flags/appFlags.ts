import {
  uniqueNamesGenerator,
  adjectives,
  animals,
  starWars,
} from 'unique-names-generator';
import { Flags } from '@oclif/core';

const now = new Date();
const randomName = uniqueNamesGenerator({
  dictionaries: [
    adjectives,
    `${now.getDate()}${now.getMonth()}` === '44' ? starWars : animals,
  ],
  length: 2,
});

export const appFlags = {
  name: Flags.string({
    summary: 'Name of the application',
    description: `This will be the name of the application. If not supplied a random name will be generated`,
    default: randomName,
  }),
  'public-key': Flags.file({
    aliases: ['public_keyfile'],
    summary: 'Public key file',
    description: `If no public key is provided, one will be automatically, generated with the application`,
  }),
  'set-config': Flags.boolean({
    summary: 'Save configuration file',
    description: `Create or update the local configuration file with the application id that the CLI can use`,
    default: false,
    allowNo: false,
  }),
  interactive: Flags.boolean({
    summary: 'Use interactive mode',
    char: 'i',
    default: false,
  }),
};
