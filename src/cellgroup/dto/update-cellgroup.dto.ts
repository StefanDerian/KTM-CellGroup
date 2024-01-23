import { PartialType } from '@nestjs/mapped-types';
import { CreateCellgroupDto } from './create-cellgroup.dto';

export class UpdateCellgroupDto extends PartialType(CreateCellgroupDto) {

    
}
