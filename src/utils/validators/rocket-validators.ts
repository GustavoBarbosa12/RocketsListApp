import { RocketType } from '../../types/rocket/rocket-type';

export const RocketValidators = {
    rocketObjectValidator(rocket: RocketType) {
        if(!rocket) {
            return false;
        }
        if(!rocket.name) {
            return false;
        }
        if(!rocket.height) {
            return false;
        }
        if(!rocket.width) {
            return false;
        }
        if(!rocket.mass) {
            return false;
        }
        if(!rocket.description) {
            return false;
        }

        return true;
    }
}