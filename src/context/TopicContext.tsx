import React, { createContext, useState } from 'react';
import { ITopic, TopicContextType } from '../@types/topic';

export const TopicContext = createContext <TopicContextType | null > (null);

export type TopicProviderProps = {
    children: React.ReactNode;
};

export const TopicProvider : React.FC<TopicProviderProps> = ( { children } ) => {

	const [ topics, setTopics ] = useState < ITopic[] > ([
		{
			id: 1,
			title: 'Dispositivos da Amazon',
			description: 'Dispositivos da Amazon',
			url: '/',
		},
		{
			id: 2,
			title: 'Livros',
			description: 'Livros',
			url: '/'
		},
		{
			id: 3,
			title: 'eBooks',
			description: 'eBooks',
			url: '/'
		},
		{
			id: 4,
			title: 'Computadores e Informática',
			description: 'Computadores e Informática',
			url: '/'
		},
        
		{
			id: 5,
			title: 'Cuidados Pessoais',
			description: 'Cuidados Pessoais',
			url: '/'
		},
		{
			id: 6,
			title: 'Games e Consoles',
			description: 'Games e Consoles',
			url: '/'
		},
		{
			id: 7,
			title: 'Cozinha',
			description: 'Cozinha',
			url: '/'
		},
		{
			id: 8,
			title: 'Brinquedos e Jogos',
			description: 'Brinquedos e Jogos',
			url: '/'
		},
		{
			id: 9,
			title: 'Bebês',
			description: 'Bebês',
			url: '/'
		},
		{
			id: 10,
			title: 'Papelaria e Escritório',
			description: 'Papelaria e Escritório',
			url: '/'
		},
		{
			id: 11,
			title: 'Alimentos e Bebidas',
			description: 'Alimentos e Bebidas',
			url: '/'
		},
	]);

	function saveTopic (topic: ITopic) {
		const newTopic: ITopic = {
			id: Math.random(), // not really unique - but fine for this example
			title: topic.title,
			description: topic.description,
			url: topic.url
		};
		setTopics([...topics, newTopic]);
	}

	return (
		<TopicContext.Provider value={{ topics, saveTopic }}>
			{children}
		</TopicContext.Provider>
	);
};


