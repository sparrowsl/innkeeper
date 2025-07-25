<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { Cog, LogOut, Mail, Bell, Activity, Menu } from '@lucide/svelte';
	import { Popover } from 'melt/builders';
	import { createSeparator, melt } from '@melt-ui/svelte';

	/** @type {import("$lib/types").User}  */
	let user = $derived(page.data.user);

	const {
		elements: { root: horizontal }
	} = createSeparator({ orientation: 'horizontal', decorative: true });

	const popover = new Popover();
</script>

<header
	class="sticky inset-x-0 top-0 z-48 flex w-full flex-wrap border-b border-gray-200 bg-white py-2.5 lg:ps-65"
>
	<nav class="mx-auto flex w-full items-center px-4 sm:px-6">
		<div class="me-5 flex items-center gap-5 lg:me-0 lg:hidden">
			<a href="/business" class="inline-block flex-none rounded-md text-xl font-semibold">
				<img src="/favicon.png" alt="Arcadia's Logo" class="size-10 rounded-full text-xs" />
			</a>

			<button type="button" class="size-8 text-gray-800 hover:text-gray-500">
				<Menu class="size-5" />
			</button>
		</div>

		<div class="ms-auto flex w-full items-center justify-end gap-x-3">
			<div class="flex flex-row items-center justify-end gap-1">
				<button
					type="button"
					class="inline-flex size-9.5 items-center justify-center rounded-full border border-transparent text-gray-800 hover:bg-gray-100"
				>
					<Bell class="size-4" />
					<span class="sr-only">Notifications</span>
				</button>

				<button
					type="button"
					class="inline-flex size-9.5 items-center justify-center rounded-full border border-transparent text-gray-800 hover:bg-gray-100"
				>
					<Activity class="size-4" />
					<span class="sr-only">Activity</span>
				</button>

				<div class="relative inline-flex">
					<button {...popover.trigger} type="button">
						<img
							src="https://robohash.org/{user?.username}"
							alt="{user?.username}'s Avatar"
							class="size-8 shrink-0 rounded-full text-xs shadow"
						/>
					</button>

					<div
						{...popover.content}
						class="w-55 rounded border border-gray-500/30 bg-white shadow-lg"
					>
						<div {...popover.arrow}></div>
						<div class="p-4">
							<div class="text-sm font-bold text-gray-900">{user?.name || 'N/A'}</div>
							<div class="text-sm text-gray-500">@{user?.username}</div>
							<div class="mt-1 flex items-center gap-1 text-sm text-gray-500">
								<Mail class="size-4" />
								{user?.email}
							</div>
						</div>
						<hr use:melt={$horizontal} class="mx-auto h-0.5 w-[90%] border-0 bg-gray-500/20" />
						<a
							href="/business"
							class="mt-2 flex w-full items-center gap-2 rounded p-2 text-sm text-gray-800 hover:bg-gray-100"
						>
							<Cog class="size-4" />
							Account
						</a>

						<form action="/business/?/logout" method="POST" use:enhance>
							<button
								type="submit"
								class="flex w-full items-center gap-2 rounded p-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900"
							>
								<LogOut class="size-4" />
								Logout
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
