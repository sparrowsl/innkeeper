<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { toast } from 'svelte-sonner';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	$effect(() => {
		if (form?.error) {
			toast.error(form.error?.message);
		}
	});
</script>

<section class="font-raleway grid min-h-[100dvh] lg:grid-cols-2">
	<div class="grid place-content-center bg-blue-500 p-4 text-center text-white">
		<h1 class="font-ptsans mb-6 text-5xl font-bold text-white">InnKeeper Business🏠</h1>
		<p class="rotate-6 transform rounded bg-slate-600 p-2 shadow md:text-lg">
			One stop place to get your ...
		</p>
	</div>

	<section class="self-center">
		<form method="POST" class="form grid place-content-center gap-6 p-5" use:enhance>
			<header>
				<h2 class="text-lg font-bold">Login to your account</h2>
				<p>Enter your details below to login to your account</p>
			</header>

			<div class="grid gap-2">
				<label for="email">Email</label>
				<input type="email" id="email" name="email" class="input" />
			</div>

			<div class="grid gap-2">
				<div class="flex items-center gap-2">
					<label for="password">Password</label>
					<a
						href="{page.url.pathname}?forgot-password"
						class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
					>
						Forgot your password?
					</a>
				</div>
				<input type="password" id="password" name="password" class="input" />
			</div>

			<footer class="flex flex-col items-center gap-2">
				<button type="submit" class="btn w-full">Login</button>
				<!-- <button type="button" class="btn-outline w-full">Login with Google</button> -->
				<p class="mt-4 text-center text-sm">
					Don't have an account?
					<a href="/business/signup" class="underline-offset-4 hover:underline">Sign up</a>
				</p>
			</footer>
		</form>
	</section>
</section>
