import { CellgroupToPeople } from '../../entities/cellgroupsToPeople.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  dob: Date;

  @OneToMany(() => CellgroupToPeople, cellgroupToPeople => cellgroupToPeople.people)
  public cellgroupsToPeople : CellgroupToPeople[]
}