import { Flags } from '@oclif/core';

const helpGroup = 'Message Capabilities';

export const messageFlags = {
  'messages-version': Flags.string({
    description: 'Version for webhook data',
    helpGroup: helpGroup,
    // TODO pull in options from applications sdk
    choices: ['v0.1', 'v1'],
    dependsOn: ['messages-inbound-url', 'messages-status-url'],
  }),

  'messages-authenticate-media': Flags.boolean({
    description: 'Authenticate inbound media',
    helpGroup: helpGroup,
    dependsOn: ['messages-inbound-url', 'messages-status-url'],
  }),

  // inbound settings
  'messages-inbound-url': Flags.string({
    aliases: ['messages_inbound_url'],
    description: 'Inbound Webhook URL Address',
    helpGroup: helpGroup,
    dependsOn: ['messages-status-url'],
  }),
  'messages-inbound-http': Flags.string({
    aliases: ['messages_inbound_http'],
    description: 'Inbound Webhook HTTP Method',
    helpGroup: helpGroup,
    hidden: true,
    options: ['POST'],
    dependsOn: ['messages-inbound-url'],
  }),

  // status settings
  'messages-status-url': Flags.string({
    aliases: ['messages_status_url'],
    description: 'Status Webhook URL Address',
    helpGroup: helpGroup,
    dependsOn: ['messages-inbound-url'],
  }),
  'messages-status-http': Flags.string({
    aliases: ['messages_status_http'],
    description: 'Status Webhook HTTP Method',
    helpGroup: helpGroup,
    hidden: true,
    options: ['POST'],
    dependsOn: ['messages-status-url'],
  }),
};
