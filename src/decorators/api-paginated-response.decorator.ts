import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PageDto } from '../dtos/page.dto';

export function ApiPaginatedResponse<T extends Type>(options: { type: T; description?: string }): MethodDecorator {
  return applyDecorators(
    ApiExtraModels(() => PageDto),
    ApiExtraModels(options.type),
    ApiOkResponse({
      description: options.description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(options.type) }
              }
            }
          }
        ]
      }
    })
  );
}
