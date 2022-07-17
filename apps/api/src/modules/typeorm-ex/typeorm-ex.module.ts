import { DynamicModule, Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CUSTOM_REPOSITORY } from '@tasker/backend/src/modules/typeorm-ex/constants/typeorm-ex.constant';

export class TypeOrmExModule {
  public static forCustomRepository<
    Repositories extends new (...args: any[]) => any
  >(...repositories: Repositories[]): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(CUSTOM_REPOSITORY, repository);

      if (!entity) continue;

      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource): typeof repository => {
          const baseRepository = dataSource.getRepository(entity);
          return new repository(
            baseRepository.target,
            baseRepository.manager,
            baseRepository.queryRunner
          );
        },
      });
    }

    return {
      exports: providers,
      module: TypeOrmExModule,
      providers,
    };
  }
}
