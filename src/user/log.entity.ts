import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Log {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  method: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  path: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  data: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  result: string;

  @Column({
    type: 'datetime',
    default: () => 'Now()',
  })
  created_at: string;

  @ManyToOne(() => User, (user) => user.logs)
  user: User;
}
