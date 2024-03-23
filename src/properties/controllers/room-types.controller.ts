import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { RoomTypesService } from '../services/room-types.service';
import { CreateRoomTypeListDto } from '../dtos/create-room-type-list.dto';
import { UpdateRoomTypeDto } from '../dtos/update-room-type.dto';
import { PropertiesService } from '../services/properties.service';
import { Serialize } from 'src/shared/interceptors/serialize.interceptor';
import { RoomTypeDto } from '../dtos/room-type.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('properties/:propertyId/room-types')
export class RoomTypesController {
  constructor(private roomTypesService: RoomTypesService, private propertyService: PropertiesService) {}

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

  @Get()
  @Serialize(RoomTypeDto)
  async findAll(@Param('propertyId') propertyGuid: string) {
    const prop = await this.propertyService.findOneByGuid(propertyGuid);
    if (!prop) {
      throw new NotFoundException('Property not found.');
    }
    return this.roomTypesService.findByProperty(prop);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRoomTypeDto: UpdateRoomTypeDto,
  ) {
    return this.roomTypesService.update(+id, updateRoomTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomTypesService.remove(+id);
  }
}
