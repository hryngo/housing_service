import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterPropertyDto } from '../dtos/register-property.dto';
import { Serialize } from '../../shared/interceptors/serialize.interceptor';
import { PropertyDto } from '../dtos/property.dto';
import { PropertiesService } from '../services/properties.service';
import { HasRoles } from '../../auth/decorators/has-roles.decorator';
import { KnownRoles } from '../../auth/constants';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { User } from '../../auth/interfaces/user.interface';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @HasRoles(KnownRoles.PROPERTY_MANAGE)
  @Post()
  @Serialize(PropertyDto)
  async register(@Body() body: RegisterPropertyDto, @CurrentUser() user: User) {
    return this.propertiesService.register(body);
  }

  @HasRoles(KnownRoles.PROPERTY_VIEW)
  @Serialize(PropertyDto)
  @Get(':id')
  findOne(@Param('id') propertyGuid: string) {
    return this.propertiesService.findOneByGuid(propertyGuid);
  }
}
