export type State = {
  +application: {
    applicationId?: string,
    isFetching?: boolean,
    exampleList?: Array<string>,
  }
};

export type History = {
  push: (redirectPath: string) => void,
};

export type Action = {
  type: string,
  payload: {
    redirectPath?: string,
  },
  meta: {
    redirectPath?: string,
  },
};

type Next = (action: Action) => Action;

export default {};
