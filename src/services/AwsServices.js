import defaultRestApi from '../common/RestApiInstance';
import AwsAPIs from '../common/AwsAPIs';
// import AwsKeys from '../common/AwsKeys';

// const {apiKey} = AwsKeys;

export default class AwsServices {

    static getImpressionsData = () => {
        return defaultRestApi.get(AwsAPIs.getImpressionsAPI(),
            {
                headers: {
                    // "x-api-key": apiKey
                }
            }
        );
    }

    static sendMessage = (message) => {
        return defaultRestApi.post(AwsAPIs.sendEmailAPI(),
            message,
            {
                headers: {
                    // "x-api-key": apiKey
                }
            }
        );
    }
}
