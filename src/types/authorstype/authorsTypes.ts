type loadAuthorsType = {
  loadAuthors: () => void;
};

export interface AuthorPropsType {
  authors: string[];
  // loadAuthors: loadAuthorsType['loadAuthors'];
  authorActions:any
  isLoading: boolean;
}

export interface AuthorContextType {
  state: {
    authors: string[];
    isLoading: boolean;
    authorsList: string[];
    dropdown: boolean;
  };
  dispatch: any;
  loadAuthors: () => void;
  getFilterByAuthor: () => void;
}
