import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <header class="bg-gray-700 w-full text-white">
        <nav class="flex-col md:flex-row flex justify-between p-4 ">
          <section class="flex-col sm:flex-row flex gap-4 items-center">
            <Link href="/publisher/marvel" class="text-bold text-xl">
              <span>Asocionaciones</span>
            </Link>
            <Link href="/publisher/marvel">Marvel</Link>
            <Link href="/publisher/dc">DC</Link>
            <Link href="/publisher/search">Search</Link>
          </section>

          <section class="flex-col sm:flex-row flex gap-4 items-center">
            <Link href="/login">Nombre del usuario autenticando</Link>
            <Link href="/logout">Logout</Link>
          </section>
        </nav>
      </header>
      <main>
        <Slot />
      </main>
    </>
  );
});
