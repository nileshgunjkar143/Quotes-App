export type ContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  authors: string[];
  loadAuthors: any
};
