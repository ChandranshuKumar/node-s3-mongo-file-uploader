import { model, Schema, Document } from 'mongoose';

export interface IFiles extends Document {
	uploaded_by: Schema.Types.ObjectId;
	name: string;
	s3_url: string;
	type: string;
	size: number;
	encoding: string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}

const filesSchema = new Schema<IFiles>({
	uploaded_by: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	name: {
		type: String,
		required: true,
		trim: true
	},
	s3_url: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	size: {
		type: Number
	},
	encoding: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: Date,
	deleted_at: Date
});

const Files = model<IFiles>('Files', filesSchema);

export default Files;
