import { component$ } from '@builder.io/qwik';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import { heroes } from '~/server/data';

export const useLoaderHero = routeLoader$(({ params }) => {
  const hero = heroes.find((heroe) => {
    return params.heroName === heroe.id.split('-')[1];
  });

  if (!hero) {
    throw new Error('Hero not found');
  }

  return hero;
});

export default component$(() => {
  const hero = useLoaderHero();
  return (
    <>
      <section
        key={hero.value.id}
        class=" flex-col sm:flex-row flex gap-4 sm:items-start justify-center max-w-xl mx-auto py-4 items-center"
      >
        <figure class="flex-1 ">
          <img
            src={`/heroes/${hero.value.id}.jpg`}
            class="w-44 rounded"
            alt={hero.value.superhero}
          />
        </figure>

        <section class="flex-1 ">
          <header>
            <h2 class="text-3xl font-bold">{hero.value.superhero}</h2>
            <p class="text-xl">Alter ego: {hero.value.alter_ego}</p>
          </header>
          <p class="text-md">
            Publisher: <span class="font-semibold">{hero.value.publisher}</span>
          </p>
          <p class="text-md">
            First Appearance:
            <span class="font-semibold">{hero.value.first_appearance}</span>
          </p>

          <h2 class="text-xl font-bold">Characters</h2>
          <ul class="list-disc list-inside">
            {hero.value.characters.split(',').map((character) => {
              return <li key={character}>{character}</li>;
            })}
          </ul>

          <Link
            href={`/publisher/${hero.value.id.split('-')[0]}`}
            class="text-indigo-700 underline"
          >
            Regresar
          </Link>
        </section>
      </section>
    </>
  );
});
