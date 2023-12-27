import awsServices from '../services/AwsServices';

export default class AwsActions {

    static async sendMessage(message) {
        return awsServices.sendMessage(message);
    }

}
