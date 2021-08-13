import BaseCommand from '@vonage/cli-utils';
import { OutputFlags } from '@oclif/parser';
import { tokenGenerate } from '@vonage/jwt';
import { request } from '@vonage/vetch';
import * as fs from 'fs-extra';
import { merge } from 'lodash';
import { HTTPMethods, ResponseTypes } from './types';

export default abstract class ConversationsCommand extends BaseCommand {
    protected _token!: string
    protected _baseurl = `https://api.nexmo.com/v0.3/conversations`;

    static flags: OutputFlags<typeof BaseCommand.flags> = {
        ...BaseCommand.flags,
    };

    static args = [
        ...BaseCommand.args,
    ];

    protected _defaultHttpOptions = {
        "method": HTTPMethods.GET,
        "headers": {},
        'responseType': ResponseTypes.json
    }

    private async _generateJWT() {
        if (!this._appId || !this._keyFile) {
            this.error('Missing appId or private key');
        }

        let private_key = await fs.readFile(`${this._keyFile}`);
        this._token = await tokenGenerate(this._appId, private_key)
        return;
    }

    async init(): Promise<void> {
        await super.init();
        await this._generateJWT();
        return;
    }

    async getAllConversations(params) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}`;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        let response = await request(opts);
        return response;
    }

    async createConversation(params) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}`;
        opts['method'] = HTTPMethods.POST;
        opts['data'] = params;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        let response = await request(opts);
        return response
    }

    async getConversationById(id) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}/${id}`;
        opts['method'] = HTTPMethods.GET;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        let response = await request(opts);
        return response
    }

    async updateConversation(params) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}/${params.conversationID}`;
        opts['method'] = HTTPMethods.PUT;
        opts['data'] = params;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        console.log(opts)
        try {
            let response = await request(opts);
            return response
        } catch (error) {
            console.dir(error, { depth: 8 })
        }
    }

    async deleteConversation(id) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}/${id}`;
        opts['method'] = HTTPMethods.DELETE;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        let response = await request(opts);
        return response
    }

    async getAllMembersInConversation(params) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}/${params.conversationID}/members`;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        let response = await request(opts);
        return response;
    }

    async getMemberById(params) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}/${params.conversationID}/members/${params.memberID}`;
        opts['method'] = HTTPMethods.GET;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        let response = await request(opts);
        return response
    }

    async addMemberToConversation(params) {
        let data = {
            "state": "joined",
            "user": {
                "id": params.userID,
            },
            "channel": {
                "type": "app",
            },
        }

        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}/${params.conversationID}/members`;
        opts['method'] = HTTPMethods.POST;
        opts['data'] = data;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        try {
            let response = await request(opts);
            console.log(response)
            return response
        } catch (error) {
            console.dir(error, { depth: 8 })
        }

    }

    async removeMemberFromConversation(params) {
        const opts = merge({}, this._defaultHttpOptions)
        opts['url'] = `${this._baseurl}/${params.conversationID}/members/${params.memberID}`;
        opts['method'] = HTTPMethods.DELETE;
        opts['headers']['Authorization'] = `Bearer ${this._token}`
        try {
            let response = await request(opts);
            return response
        } catch (error) {
            console.dir(error, { depth: 8 })
        }

    }

    getConversationsByUser(opts): Promise<any> { return opts }
}