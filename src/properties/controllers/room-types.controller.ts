import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { KnownRoles } from '../../auth/constants';
import { HasRoles } from '../../auth/decorators/has-roles.decorator';
import { Serialize } from '../../shared/interceptors/serialize.interceptor';
import { CreateRoomTypeListDto } from '../dtos/create-room-type-list.dto';
import { RoomTypeDto } from '../dtos/room-type.dto';
import { UpdateRoomTypeDto } from '../dtos/update-room-type.dto';
import { PropertiesService } from '../services/properties.service';
import { RoomTypesService } from '../services/room-types.service';

@Controller('properties/:propertyId/room-types')
export class RoomTypesController {
  constructor(
    private roomTypesService: RoomTypesService,
    private propertyService: PropertiesService,
  ) {}

  @HasRoles(KnownRoles.PROPERTY_MANAGE)
  @Post()
  @Serialize(RoomTypeDto)
  async create(
    @Param('propertyId') propertyGuid: string,
    @Body() body: CreateRoomTypeListDto,
  ) {
    const prop = await this.propertyService.findOneByGuid(propertyGuid);
    if (!prop) {
      throw new NotFoundException('Property not found.');
    }
    return this.roomTypesService.create(prop, body);
  }

  @HasRoles(KnownRoles.PROPERTY_VIEW)
  @Get()
  @Serialize(RoomTypeDto)
  async findAll(@Param('propertyId') propertyGuid: string) {
    const prop = await this.propertyService.findOneByGuid(propertyGuid);
    if (!prop) {
      throw new NotFoundException('Property not found.');
    }
    return this.roomTypesService.findByProperty(prop);
  }

  @HasRoles(KnownRoles.PROPERTY_VIEW)
  @Get(':id')
  async findOne(
    @Param('propertyId') propertyGuid: string,
    @Param('id') guid: string,
  ) {
    const prop = await this.propertyService.findOneByGuid(propertyGuid);
    if (!prop) {
      throw new NotFoundException('Property not found.');
    }
    return this.roomTypesService.findOneByGuid(guid);
  }

  @HasRoles(KnownRoles.PROPERTY_MANAGE)
  @Patch(':id')
  @Serialize(RoomTypeDto)
  async update(
    @Param('propertyId') propertyGuid: string,
    @Param('id') guid: string,
    @Body() updateRoomTypeDto: UpdateRoomTypeDto,
  ) {
    const prop = await this.propertyService.findOneByGuid(propertyGuid);
    if (!prop) {
      throw new NotFoundException('Property not found.');
    }
    return this.roomTypesService.update(guid, updateRoomTypeDto);
  }

  @HasRoles(KnownRoles.PROPERTY_MANAGE)
  @Delete(':id')
  async remove(
    @Param('propertyId') propertyGuid: string,
    @Param('id') guid: string,
  ) {
    const prop = await this.propertyService.findOneByGuid(propertyGuid);
    if (!prop) {
      throw new NotFoundException('Property not found.');
    }
    return this.roomTypesService.remove(guid);
  }
}
