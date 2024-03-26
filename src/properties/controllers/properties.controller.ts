import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { KnownRoles } from '../../auth/constants';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { HasRoles } from '../../auth/decorators/has-roles.decorator';
import { User } from '../../auth/interfaces/user.interface';
import { Serialize } from '../../shared/interceptors/serialize.interceptor';
import { PropertyDto } from '../dtos/property.dto';
import { RegisterPropertyDto } from '../dtos/register-property.dto';
import { PropertiesService } from '../services/properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @HasRoles(KnownRoles.PROPERTY_MANAGE)
  @Post()
  @Serialize(PropertyDto)
  async register(@Body() body: RegisterPropertyDto, @CurrentUser() user: User) {
    console.log(`A authenticated user - ${user}`);
    return this.propertiesService.register(body);
  }

  @HasRoles(KnownRoles.PROPERTY_VIEW)
  @Serialize(PropertyDto)
  @Get(':id')
  async findOne(@Param('id') propertyGuid: string) {
    return this.propertiesService.findOneByGuid(propertyGuid);
  }
}
