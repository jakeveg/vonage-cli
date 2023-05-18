import { Flags } from '@oclif/core';

const helpGroup = 'Meetings Capabilities';

export const meetingsFlags = {
  'meetings-record-url': Flags.string({
    description: 'Recording Webhook URL',
    helpGroup: helpGroup,
  }),
  'meetings-rooms-url': Flags.string({
    description: 'Rooms Webhook URL',
    helpGroup: helpGroup,
  }),
  'meetings-session-url': Flags.string({
    description: 'Session Webhook URL',
    helpGroup: helpGroup,
  }),
};
