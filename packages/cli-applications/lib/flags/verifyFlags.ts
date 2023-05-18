import { Flags } from '@oclif/core';

const helpGroup = 'Verify Capabilities';

export const verifyFlags = {
  'verify-status-url': Flags.string({
    description: 'Status url',
    helpGroup: helpGroup,
  }),
};
