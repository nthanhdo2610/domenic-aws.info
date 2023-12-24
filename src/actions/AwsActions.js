import awsServices from '../services/AwsServices';

export default class AwsActions {

    static async getImpressionsData() {
        return awsServices.getImpressionsData().then(res => {
            return res.data || {};
        }).catch(error => {
            return {};
        });
    }

    static async sendMessage(message) {
        return awsServices.sendMessage(message);
    }

}
