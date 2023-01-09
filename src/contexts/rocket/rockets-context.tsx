import { createContext, useContext, useState } from 'react';
import { RocketType } from '../../types/rocket/rocket-type';
import { RocketsContextInterface, RocketsProviderChildren } from './rockets-context-types';

const RocketsContext = createContext<RocketsContextInterface>({} as RocketsContextInterface);

export const RocketsProvider = ({children}: RocketsProviderChildren) => {
    const [rockets, setRockets] = useState<RocketType[]>([]);
    const [rocketsListPage, setRocketsListPage] = useState<number>(1);
    const [rocketsListTotalPages, setRocketsListTotalPages] = useState<number>(1);
    const [selectedRocket, setSelectedRocket] = useState<RocketType>({} as RocketType);

    return (
        <RocketsContext.Provider value={{
            rockets, 
            setRockets, 
            rocketsListPage, 
            setRocketsListPage, 
            rocketsListTotalPages,
            setRocketsListTotalPages,
            selectedRocket,
            setSelectedRocket
        }}>
            {children}
        </RocketsContext.Provider>
    )
}

export function useRockets(): RocketsContextInterface {
    const context = useContext(RocketsContext);
  
    if (!context) {
      throw new Error('useRockets must be used within an RocketsProvider');
    }
  
    return context;
}
