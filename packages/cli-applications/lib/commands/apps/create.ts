import { VonageCommand } from '@vonage/cli-core';
import {
  meetingsFlags,
  voiceFlags,
  messageFlags,
  verifyFlags,
  rtcFlags,
  bulkFlags,
  appFlags,
} from '../../flags';
import { input } from '@inquirer/prompts';

export default class CreateCommand extends VonageCommand<typeof CreateCommand> {
  static summary = 'Create Application';

  static usage = 'apps:create';

  static description = `Create a Vonage application. By default, the application will have no capabilities. This will download the private and public keys (if you do not supply a public key)`;

  static flags = {
    ...appFlags,
    ...voiceFlags,
    ...messageFlags,
    ...verifyFlags,
    ...meetingsFlags,
    ...rtcFlags,
    ...bulkFlags,
  };

  async run(): Promise<void> {
    const { name, interactive } = this.flags;
    this.log(this.ux.dumpValue(this.flags));
    let appName = name;
    if (interactive) {
      this.log('Entering interactive mode');
      const answer = await input({
        message: 'Enter app name',
        default: name,
      });
      appName = answer;
    }

    this.log(`I am creating an application named ${appName}`);
  }
}
