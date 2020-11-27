import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type redDocument = Red & Document;

@Schema()
export class Red {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const noderedSchema = SchemaFactory.createForClass(Red);
