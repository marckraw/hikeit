import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Picture extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'text' })
  description?: string;

  @Column()
  url: string;

  @Column({ nullable: true, type: 'text' })
  base64?: string;

  // Relations
  // @ManyToOne(() => User, (user) => user.pictures)
  // user: User;
  // tags: Tag['_id'][]; // Link to Tags in db (this is just sketch of how this things will relate to each other)
}
