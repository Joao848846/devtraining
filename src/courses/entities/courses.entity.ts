import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'json', nullable: true })
  tags?: string[];

  @Column()
  price: number;

  @Column({ type: 'json', nullable: true })
  whatsApp?: string;
}
