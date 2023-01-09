import { Alert } from 'react-native';
import { RocketType } from '../types/rocket/rocket-type';
import HttpService from './http-service'

export const RocketService = {
    async create(rocket: RocketType) {
        try {
            let response = await HttpService.post('/rocket/create', {...rocket});
            Alert.alert('Rocket created!');
            return response;
        } catch (error) {
            Alert.alert('Error creating rocket!');
        }
    },

    async findAll(page: number) {
        try {
            let response = await HttpService.post('/rocket/find-all', {page});
            return response;
        } catch (error) {
            Alert.alert('Rockets not found!');
        }
    },

    async findByName(name: string) {
        try {
            let response = await HttpService.post('/rocket/find-by-name', {name});
            return response;
        } catch (error) {
            Alert.alert('Rocket not found!');
        }
    },

    async updateRocket(rocket: RocketType) {
        try {
            let response = await HttpService.post('/rocket/update', {...rocket});
            Alert.alert('Rocket updated!');
            return response;
        } catch (error) {
            Alert.alert('Error updating rocket!');
        }
    },
    
    async delete(name: string) {
        try {
            let response = await HttpService.post('/rocket/delete', {name});
            Alert.alert('Rocket deleted!');
            return response;
        } catch (error) {
            Alert.alert('Error deleting rocket!');
        }
    }
}