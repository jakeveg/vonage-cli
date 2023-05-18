import { Flags } from '@oclif/core';
import { ConfigParams, VonageCommand } from '@vonage/cli-core';

export default class ListCommand extends VonageCommand<typeof ListCommand> {
  static summary = 'List all applications';

  async run(): Promise<void> {
    this.log('I am listing applications');
  }
}
