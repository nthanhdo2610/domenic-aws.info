import AwsAccess from './AwsAccess';

const {apiPath} = AwsAccess;

const AwsAPIs = {

    sendEmailAPI: function () {
        return `${apiPath}/email`;
    },
}

export default AwsAPIs;
