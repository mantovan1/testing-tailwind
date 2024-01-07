export interface ITopic {
    id: number;
    title: string;
    description: string;
    url: string;
}

export type TopicContextType = {
    topics: ITopic [];
    saveTopic: (topic: ITopic) => void;
};