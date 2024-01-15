import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}