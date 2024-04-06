import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ApiDetailResponse } from 'src/shared/decorators/swagger/api-detail-response.decorator';

import { KnownPermissions } from '../../auth/constants';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { HasPerms } from '../../auth/decorators/has-perms.decorator';
import { User } from '../../auth/interfaces/user.interface';
import { Serialize } from '../../shared/interceptors/serialize.interceptor';
import { PropertyDto } from '../dtos/property.dto';
import { RegisterPropertyDto } from '../dtos/register-property.dto';
import { PropertiesService } from '../services/properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @HasPerms(KnownPermissions.PROPERTY_MANAGE)
  @Post()
  @Serialize(PropertyDto)
  @ApiDetailResponse(PropertyDto, {
    status: 201,
    description: 'The property hotel has been successfully registered.',
  })
  @ApiBadRequestResponse({ description: 'Bad request (validation error).' })
  async register(@Body() body: RegisterPropertyDto, @CurrentUser() user: User) {
    console.log(`A authenticated user - ${user}`);
    return this.propertiesService.register(body);
  }

  @HasPerms(KnownPermissions.PROPERTY_VIEW)
  @Serialize(PropertyDto)
  @Get(':id')
  @ApiDetailResponse(PropertyDto, {
    status: 200,
    description: 'Successful retrieved a property hotel.',
  })
  @ApiNotFoundResponse({ description: 'Property hotel not found.' })
  async findOne(@Param('id') propertyGuid: string) {
    return this.propertiesService.findOneByGuid(propertyGuid);
  }
}
