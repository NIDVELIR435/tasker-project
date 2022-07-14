import { StatusCodes } from 'http-status-codes';
import { statusCodeToDefaultDescription } from '@tasker/backend/common/constants/statusCodeToDefaultDescription.constant';
import { ErrorExceptionDto } from '@tasker/backend/common/dtos/error-exception.dto';

export const errorsResponses = {
  [StatusCodes.CONFLICT]: {
    type: ErrorExceptionDto,
    isArray: false,
    description: statusCodeToDefaultDescription[StatusCodes.CONFLICT],
  },
  [StatusCodes.NOT_FOUND]: {
    type: ErrorExceptionDto,
    isArray: false,
    description: statusCodeToDefaultDescription[StatusCodes.NOT_FOUND],
  },
} as const;
