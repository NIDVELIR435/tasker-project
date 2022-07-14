import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ApiResponsesType } from '@tasker/backend/common/decorators/api-responses.type';
import { errorsResponses } from '@tasker/backend/common/constants/error-responses.constant';
import { getResponse } from '@tasker/backend/common/constants/get-response.constant';
import { defaults } from 'lodash';

export const ApiResponses = (responses: ApiResponsesType) => {
  const apiResponses = Object.entries(defaults(responses, errorsResponses)).map(
    ([status, { description, type, isArray }]) =>
      ApiResponse(getResponse(status, description, type, isArray))
  );
  return applyDecorators(...apiResponses);
};
