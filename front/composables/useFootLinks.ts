import { ClassifyType } from 'types';

export const useFootLinks = () =>
  useState<ClassifyType[]>('footLinks', () => []);
