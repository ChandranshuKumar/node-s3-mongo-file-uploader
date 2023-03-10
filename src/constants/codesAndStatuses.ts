export const HTTP = {
	SUCCESS: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	CONFLICT: 409,
	INTERNAL_SERVER_ERROR: 500,
	SERVICE_UNAVAILABLE: 503
} as const;

export const ERROR_CODES = {
	BAD_REQUEST: 'bad_request',
	NOT_FOUND: 'not_found',
	SERVER_ERR: 'internal_server_error',
	UNAUTHORIZED: 'unauthorized',
	FORBIDDEN: 'forbidden',
	INVALID_TOKEN: 'invalid_token',
	USER_NOT_FOUND: 'user_not_found',
	EMAIL_NOT_FOUND: 'email_not_found',
	DEDUPE_EMAIL: 'email_exists',
	INVALID_EMAIL: 'invalid_email',
	INVALID_PASSWORD: 'invalid_password',
	INSUFFICIENT_FILE_DATA: 'insufficient_file_data',
	FILE_UPLOAD_FAILED: 'file_upload_failed',
	DEDUPE_FILE: 'file_name_exists',
	INVALID_FILE_ID: 'invalid_file_id',
	FILE_NOT_FOUND: 'file_not_found',
	FILE_DELETE_FAILED: 'file_delete_failed',
	FILES_NOT_FOUND: 'files_not_found'
} as const;
