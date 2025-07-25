/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const token = event.cookies.get('token');

	// if (!token) {
	// 	return await resolve(event);
	// }

	// /** @type {Object<String,any>} */
	// let verifiedPayload;
	// try {
	// 	verifiedPayload = jwt.verify(token, JWT_SECRET_KEY);
	// } catch (_) {
	// 	return await resolve(event);
	// }

	// const user = await db.query.usersTable.findFirst({
	// 	where: eq(usersTable.id, verifiedPayload?.id),
	// });

	// if (user) {
	// 	event.locals.user = user;
	// }

	return await resolve(event);
}
