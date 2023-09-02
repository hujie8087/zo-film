import { ClassifyType } from 'types';

export const useLinks = () => useState<ClassifyType[]>('links', () => []);
