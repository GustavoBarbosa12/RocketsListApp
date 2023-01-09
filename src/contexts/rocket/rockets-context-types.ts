import { Dispatch, SetStateAction } from 'react';
import { RocketType } from '../../types/rocket/rocket-type';

export type RocketsContextInterface = {
    rockets: RocketType[];
    rocketsListPage: number;
    rocketsListTotalPages: number;
    selectedRocket: RocketType;
    setRockets: Dispatch<SetStateAction<RocketType[]>>;
    setRocketsListPage: Dispatch<SetStateAction<number>>;
    setRocketsListTotalPages: Dispatch<SetStateAction<number>>;
    setSelectedRocket: Dispatch<SetStateAction<RocketType>>;
}

export type RocketsProviderChildren = {
    children: JSX.Element;
}