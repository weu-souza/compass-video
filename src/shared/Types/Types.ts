import serie from "../API/Model/Serie";

export type serieProps = {
  serie: serie | null;
  children?:string
};

export type OptionsType = {
  method: string;
  url: string;
  params: {
    language: string;
    page: string;
  };
  headers: {
    accept: string;
    Authorization: string;
  };
};
