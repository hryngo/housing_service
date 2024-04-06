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
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { KnownPermissions } from '../../auth/constants';
import { HasPerms } from '../../auth/decorators/has-perms.decorator';
import { ApiDetailResponse } from '../../shared/decorators/swagger/api-detail-response.decorator';
import { ApiListResponse } from '../../shared/decorators/swagger/api-list-response.decorator';
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
  ) {
  }

  @HasPerms(KnownPermissions.PROPERTY_MANAGE)
  @Post()
  @Serialize(RoomTypeDto)
  @ApiListResponse(RoomTypeDto, {
    status: 201,
    description: 'Successful created many room types.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Not found.' })
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

  @HasPerms(KnownPermissions.PROPERTY_VIEW)
  @Get()
  @Serialize(RoomTypeDto)
  @ApiListResponse(RoomTypeDto, {
    status: 200,
    description: 'Successful retrieved all room types.',
  })
  @ApiNotFoundResponse({ description: 'Not found.' })
  async findAll(@Param('propertyId') propertyGuid: string) {
    const prop = await this.propertyService.findOneByGuid(propertyGuid);
    if (!prop) {
      throw new NotFoundException('Property not found.');
    }
    return this.roomTypesService.findByProperty(prop);
  }

  @HasPerms(KnownPermissions.PROPERTY_VIEW)
  @Get(':id')
  @Serialize(RoomTypeDto)
  @ApiDetailResponse(RoomTypeDto, {
    status: 200,
    description: 'Successful retrieved a room type.',
  })
  @ApiNotFoundResponse({ description: 'Not found.' })
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

  @HasPerms(KnownPermissions.PROPERTY_MANAGE)
  @Patch(':id')
  @Serialize(RoomTypeDto)
  @ApiDetailResponse(RoomTypeDto, {
    status: 200,
    description: 'Successful updated a room type.',
  })
  @ApiNotFoundResponse({ description: 'Not found.' })
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

  @HasPerms(KnownPermissions.PROPERTY_MANAGE)
  @Delete(':id')
  @ApiOkResponse({ description: 'Successful removed a room type.' })
  @ApiNotFoundResponse({ description: 'Not found.' })
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
