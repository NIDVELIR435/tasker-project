import { allowsStatusCodeNumber } from '@tasker/backend/common/constants/allowsStatusCodeNumber.constants';

export type ApiResponsesType = {
  [Key in typeof allowsStatusCodeNumber]: {
    description?: string;
    type?: { new (): unknown };
    isArray?: boolean;
  };
};
