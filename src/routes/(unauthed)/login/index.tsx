import { component$ } from '@builder.io/qwik';
import { Form, Link, routeAction$ } from '@builder.io/qwik-city';

export const useLoginAction = routeAction$((values, request) => {
  throw request.redirect(303, '/publisher/marvel');
});

export default component$(() => {
  const loginAction = useLoginAction();
  return (
    <main class="px-48 py-24 flex flex-col gap-4">
      <h2 class="text-3xl font-bold">Login</h2>

      <Form action={loginAction}>
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded text-white w-full"
        >
          Login
        </button>
      </Form>
      <p>Si no funciona el boton puedes dark click aqui</p>
      <Link href="/publisher/marvel" class="underline text-cyan-800">
        Login
      </Link>
    </main>
  );
});
