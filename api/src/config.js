import "dotenv/config";

function validate_config() {
	return { PORT: process.env.PORT };
}

export const config = validate_config();
