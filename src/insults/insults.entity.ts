import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Insult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;
}
