import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { EsPageDto } from '../dtos/es-page.dto';

export function ApiPaginatedResponse<T extends Type>(options: { type: T; description?: string }): MethodDecorator {
  return applyDecorators(
    ApiExtraModels(EsPageDto),
    ApiExtraModels(options.type),
    ApiOkResponse({
      description: options.description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(EsPageDto) },
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
