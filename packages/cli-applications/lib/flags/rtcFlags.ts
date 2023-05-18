import { Flags } from '@oclif/core';

const helpGroup = 'RTC Capabilities';

export const rtcFlags = {
  'rtc-event-url': Flags.string({
    aliases: ['rtc_event_url'],
    description: 'Event webhook URL',
    helpGroup: helpGroup,
  }),
  'rtc-event-http': Flags.string({
    aliases: ['voice_answer_http'],
    description: 'Event Webhook HTTP Method',
    options: ['GET', 'POST'],
    dependsOn: ['rct-event-url'],
    helpGroup: helpGroup,
  }),
  'rtc-signed-callbacks': Flags.boolean({
    description: 'Enable signed callbacks',
    dependsOn: ['voice-event-url'],
    helpGroup: helpGroup,
  }),
};
