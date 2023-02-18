import {Dispatch, SetStateAction} from 'react';

export interface quotesType {
  _id: string;
  author: string;
  quote: string;
  tags: string;
  dislikes: number;
  likes: number;
  __v?:number;
  isActive?:boolean
}

export interface quotePageType {
  route: {params: string};
  navigation: {navigate: (arg0: string) => void};
}

export interface quoteListType {
  quotes: quotesType[];
  handleLikeClicked: (quoteId: string) => Promise<void>;
  isLoading: boolean;
  loadQuotes: any;
  searchAuthor: string;
}

export interface quoteItemType {
  quote: quotesType;
  likes: number;
  handleLikeClicked: (quoteId: string) => Promise<void>;
  handleDelete:  (id: string) => void;
}

export interface quotesSearchType{
  loadQuotes: any;
  toggleAddQuote: () => void;
  searchAuthor: string;
  setSearchAuthor: Dispatch<SetStateAction<string>>;
}
