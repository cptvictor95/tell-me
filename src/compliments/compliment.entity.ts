import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Compliment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;
}
