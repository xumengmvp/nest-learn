import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'tinyint',
    nullable: true,
  })
  gender: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  avatar: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  address: string;
}
