import {
  ApiOperation,
  ApiOperationOptions,
  ApiResponse,
} from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { ApiResponsesType } from '@tasker/backend/common/decorators/api-responses.type';
import { errorsResponses } from '@tasker/backend/common/constants/error-responses.constant';
import { getResponse } from '@tasker/backend/common/constants/get-response.constant';
import { defaults, isNil } from 'lodash';

type ApiDescribe = {
  apiOperation?: Omit<ApiOperationOptions, 'responses'>;
  apiResponses?: ApiResponsesType;
};

export const ApiSwagger = (describe: ApiDescribe) => {
  const apiResponses = Object.entries(
    defaults(describe.apiResponses, errorsResponses)
  ).map(([status, { description, type, isArray }]) =>
    ApiResponse(getResponse(status, description, type, isArray))
  );

  const customApiOperation = !isNil(describe.apiOperation)
    ? ApiOperation(describe.apiOperation)
    : ApiOperation({});

  return applyDecorators(...apiResponses, customApiOperation);
};
