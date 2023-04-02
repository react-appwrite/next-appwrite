import Service from '../service.js';
import AppwriteException from '../exception.js';

class Graphql extends Service {

    constructor(client) {
        super(client);
    }


    /**
     * GraphQL Endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async query(query) {
        let path = '/graphql';
        let payload = {};
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }


        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }

        return await this.client.call('post', path, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * GraphQL Endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async mutation(query) {
        let path = '/graphql/mutation';
        let payload = {};
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }


        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }

        return await this.client.call('post', path, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }
}

export default Graphql;