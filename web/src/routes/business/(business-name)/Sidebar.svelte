<script lang="ts">
	import { X, LayoutDashboard, Users, Briefcase, Calendar, BookOpen, Group } from '@lucide/svelte';
</script>

<div
	class="{true
		? 'translate-x-0'
		: '-translate-x-full'} fixed inset-y-0 start-0 z-60 h-full w-60 transform border-e border-gray-200 bg-white transition-transform duration-300 lg:block lg:translate-x-0"
>
	<div class="relative flex h-full max-h-full flex-col">
		<div class="flex items-center justify-between px-6 pt-4">
			<a href="/business" class="flex items-center gap-2">
				<img src="/favicon.png" alt="Logo" class="size-10 rounded-full" />
				<span class="font-faglyph text-primary text-lg">Arcadia</span>
			</a>

			<button type="button" class="text-red-500 hover:text-red-600 lg:hidden">
				<X />
			</button>
		</div>

		<aside class="mt-5 h-full overflow-y-auto">
			<nav class="flex w-full flex-col flex-wrap p-3">
				<ul class="flex flex-col space-y-1">
					<li>
						<a
							href="/business"
							class="flex items-center gap-x-3.5 rounded-lg bg-gray-100 px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100"
						>
							<LayoutDashboard class="size-4" />
							Dashboard
						</a>
					</li>

					<li>
						<a
							href="/business"
							class="flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100"
						>
							<Users class="size-4" />
							Users
						</a>
					</li>

					<li>
						<a
							href="/business/tournaments"
							class="flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100"
						>
							<Briefcase class="size-4" />
							Tournaments
						</a>
					</li>

					<li>
						<a
							href="/business/clans"
							class="flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100"
						>
							<Group class="size-4" />
							Clans
						</a>
					</li>

					<li>
						<a
							href="/business"
							class="flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100"
						>
							<BookOpen class="size-4" />
							Documentation
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	</div>
</div>
