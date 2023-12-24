import AwsKeys from './AwsKeys';

const {apiPath, awsCognitoURL} = AwsKeys;

const AwsAPIs = {

    getImpressionsAPI: function (email) {
        return `${apiPath}/impressions`;
    },

    sendEmailAPI: function () {
        return `${apiPath}/email`;
    },
}

export default AwsAPIs;
