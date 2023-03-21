import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { HeroCard } from '~/components/ui/HeroCard';
import { heroes } from '~/server/data';

export const useLoaderPublisher = routeLoader$(({ params }) => {
  const publisherHeroes = heroes.filter((heroe) => {
    return params.publisherName === heroe.id.split('-')[0];
  });

  return publisherHeroes;
});

export default component$(() => {
  const publisherHeroes = useLoaderPublisher();
  return (
    <main>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 gap-4 px-12">
        {publisherHeroes.value.map((hero) => {
          return <HeroCard key={hero.id} hero={hero} />;
        })}
      </div>
    </main>
  );
});
