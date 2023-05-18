import { Flags } from '@oclif/core';

const helpGroup = 'Voice Capabilities';

export const voiceFlags = {
  'voice-payment-enabled': Flags.boolean({
    description: 'Enable payments',
    dependsOn: ['voice-fallback-url', 'voice-event-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-signed-callbacks': Flags.boolean({
    description: 'Enable signed callbacks',
    dependsOn: ['voice-fallback-url', 'voice-event-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-conversations-ttl': Flags.integer({
    description: 'Timeout for conversation',
    dependsOn: ['voice-fallback-url', 'voice-event-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-region': Flags.string({
    description: 'Region',
    // TODO pull in region from SDK
    dependsOn: ['voice-fallback-url', 'voice-event-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),

  // answer
  'voice-answer-url': Flags.string({
    aliases: ['voice_answer_url'],
    description: 'Answer Webhook URL Address',
    dependsOn: ['voice-fallback-url', 'voice-event-url'],
    helpGroup: helpGroup,
  }),
  'voice-answer-http': Flags.string({
    aliases: ['voice_answer_http'],
    description: 'Answer Webhook HTTP Method',
    options: ['GET', 'POST'],
    dependsOn: ['voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-answer-connection-timeout': Flags.integer({
    description: 'Answer connection timeout',
    dependsOn: ['voice-answer-url'],
    helpGroup: helpGroup,
    min: 300,
    max: 5000,
  }),
  'voice-answer-socket-timeout': Flags.integer({
    description: 'Answer socket timeout',
    dependsOn: ['voice-answer-url'],
    helpGroup: helpGroup,
    min: 300,
    max: 5000,
  }),

  // events
  'voice-event-url': Flags.string({
    aliases: ['voice_event_url'],
    description: 'Event Webhook URL Address',
    dependsOn: ['voice-fallback-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-event-http': Flags.string({
    aliases: ['voice_event_http'],
    description: 'Event Webhook HTTP Method',
    options: ['GET', 'POST'],
    dependsOn: ['voice-fallback-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-event-connection-timeout': Flags.integer({
    description: 'Event connection timeout',
    dependsOn: ['voice-event-url'],
    helpGroup: helpGroup,
    min: 300,
    max: 5000,
  }),
  'voice-event-socket-timeout': Flags.integer({
    description: 'Event socket timeout',
    dependsOn: ['voice-event-url'],
    helpGroup: helpGroup,
    min: 300,
    max: 5000,
  }),

  // fallbacks
  'voice-fallback-url': Flags.string({
    aliases: ['voice_fallback_url'],
    description: 'Fallback Webhook URL Address',
    dependsOn: ['voice-event-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-fallback-http': Flags.string({
    aliases: ['voice_fallback_http'],
    description: 'Fallback Webhook HTTP Method',
    options: ['GET', 'POST'],
    dependsOn: ['voice-event-url', 'voice-answer-url'],
    helpGroup: helpGroup,
  }),
  'voice-fallback-connection-timeout': Flags.integer({
    description: 'Fallback connection timeout',
    dependsOn: ['voice-fallback-url'],
    helpGroup: helpGroup,
    min: 300,
    max: 5000,
  }),
  'voice-fallback-socket-timeout': Flags.integer({
    description: 'Fallback socket timeout',
    dependsOn: ['voice-fallback-url'],
    helpGroup: helpGroup,
    min: 300,
    max: 5000,
  }),
};
