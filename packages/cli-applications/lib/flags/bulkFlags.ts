import { Flags } from '@oclif/core';

const helpGroup = 'Bulk Capabilities';

export const bulkFlags = {
  'bulk-status-url': Flags.string({
    description: 'List status webhook URL',
    helpGroup: helpGroup,
  }),
  'bulk-run-url': Flags.string({
    description: 'Run status webhook URL',
    helpGroup: helpGroup,
  }),
};
