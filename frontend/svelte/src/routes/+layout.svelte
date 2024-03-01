<script>
	import '../app.pcss';
</script>

<div class="drawer xl:drawer-open flex min-h-screen">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex w-full flex-col">
		<!-- Navbar -->
		<div class="navbar bg-base-300 fixed z-10 w-full">
			<div class="mx-2 flex-1 px-2">Navbar Title</div>
			<div class="hidden flex-none sm:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li><a href="/Trabajadores">Trabajadores</a></li>
					<li><a href="/Productos">Productos</a></li>
					<li><a href="/Facturas">Factura</a></li>
				</ul>
			</div>
		</div>

		<!-- Page content here -->
		<div class="flex min-h-full bg-black">
			<span class="w-0 opacity-0 transition-all duration-200"></span>
			<main class="mt-16 flex-1">
				<slot />
			</main>
		</div>
	</div>
</div>
