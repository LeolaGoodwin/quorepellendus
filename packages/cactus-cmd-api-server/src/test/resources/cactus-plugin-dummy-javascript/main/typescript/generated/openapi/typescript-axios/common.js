"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Plugin - Keychain Memory
 * Contains/describes the Hyperledger Cactus Keychain Memory plugin.
 *
 * The version of the OpenAPI document: 0.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setOAuthToObject = exports.setBearerAuthToObject = exports.setBasicAuthToObject = exports.setApiKeyToObject = exports.assertParamExists = exports.DUMMY_BASE_URL = void 0;
const base_1 = require("./base");
/**
 *
 * @export
 */
exports.DUMMY_BASE_URL = 'https://example.com';
/**
 *
 * @throws {RequiredError}
 * @export
 */
const assertParamExists = function (functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) {
        throw new base_1.RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
};
exports.assertParamExists = assertParamExists;
/**
 *
 * @export
 */
const setApiKeyToObject = async function (object, keyParamName, configuration) {
    if (configuration && configuration.apiKey) {
        const localVarApiKeyValue = typeof configuration.apiKey === 'function'
            ? await configuration.apiKey(keyParamName)
            : await configuration.apiKey;
        object[keyParamName] = localVarApiKeyValue;
    }
};
exports.setApiKeyToObject = setApiKeyToObject;
/**
 *
 * @export
 */
const setBasicAuthToObject = function (object, configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
};
exports.setBasicAuthToObject = setBasicAuthToObject;
/**
 *
 * @export
 */
const setBearerAuthToObject = async function (object, configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken()
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
};
exports.setBearerAuthToObject = setBearerAuthToObject;
/**
 *
 * @export
 */
const setOAuthToObject = async function (object, name, scopes, configuration) {
    if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken(name, scopes)
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + localVarAccessTokenValue;
    }
};
exports.setOAuthToObject = setOAuthToObject;
/**
 *
 * @export
 */
const setSearchParams = function (url, ...objects) {
    const searchParams = new URLSearchParams(url.search);
    for (const object of objects) {
        for (const key in object) {
            if (Array.isArray(object[key])) {
                searchParams.delete(key);
                for (const item of object[key]) {
                    searchParams.append(key, item);
                }
            }
            else {
                searchParams.set(key, object[key]);
            }
        }
    }
    url.search = searchParams.toString();
};
exports.setSearchParams = setSearchParams;
/**
 *
 * @export
 */
const serializeDataIfNeeded = function (value, requestOptions, configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
};
exports.serializeDataIfNeeded = serializeDataIfNeeded;
/**
 *
 * @export
 */
const toPathString = function (url) {
    return url.pathname + url.search + url.hash;
};
exports.toPathString = toPathString;
/**
 *
 * @export
 */
const createRequestFunction = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
    return (axios = globalAxios, basePath = BASE_PATH) => {
        const axiosRequestArgs = Object.assign(Object.assign({}, axiosArgs.options), { url: ((configuration === null || configuration === void 0 ? void 0 : configuration.basePath) || basePath) + axiosArgs.url });
        return axios.request(axiosRequestArgs);
    };
};
exports.createRequestFunction = createRequestFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vdHlwZXNjcmlwdC9nZW5lcmF0ZWQvb3BlbmFwaS90eXBlc2NyaXB0LWF4aW9zL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQjs7Ozs7Ozs7OztHQVVHOzs7QUFJSCxpQ0FBb0Q7QUFHcEQ7OztHQUdHO0FBQ1UsUUFBQSxjQUFjLEdBQUcscUJBQXFCLENBQUE7QUFFbkQ7Ozs7R0FJRztBQUNJLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxZQUFvQixFQUFFLFNBQWlCLEVBQUUsVUFBbUI7SUFDbkcsSUFBSSxVQUFVLEtBQUssSUFBSSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDakQsTUFBTSxJQUFJLG9CQUFhLENBQUMsU0FBUyxFQUFFLHNCQUFzQixTQUFTLHVDQUF1QyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQzdIO0FBQ0wsQ0FBQyxDQUFBO0FBSlksUUFBQSxpQkFBaUIscUJBSTdCO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxpQkFBaUIsR0FBRyxLQUFLLFdBQVcsTUFBVyxFQUFFLFlBQW9CLEVBQUUsYUFBNkI7SUFDN0csSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUN2QyxNQUFNLG1CQUFtQixHQUFHLE9BQU8sYUFBYSxDQUFDLE1BQU0sS0FBSyxVQUFVO1lBQ2xFLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0tBQzlDO0FBQ0wsQ0FBQyxDQUFBO0FBUFksUUFBQSxpQkFBaUIscUJBTzdCO0FBRUQ7OztHQUdHO0FBQ0ksTUFBTSxvQkFBb0IsR0FBRyxVQUFV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