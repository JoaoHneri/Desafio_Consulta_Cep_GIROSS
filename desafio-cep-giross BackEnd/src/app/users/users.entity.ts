/* eslint-disable prettier/prettier */
import{Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm'
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({name: 'first_name',})
  firstName: string;
  @Column({name: 'last_name',})
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @CreateDateColumn({name: 'created_at'})
  createdAt: string;
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: string;
  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: string;
}
