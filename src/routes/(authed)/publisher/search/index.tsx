import { component$ } from '@builder.io/qwik';
import { Form, routeLoader$ } from '@builder.io/qwik-city';
import { HeroCard } from '~/components/ui/HeroCard';
import { heroes } from '~/server/data';

export const useLoaderHeroSearch = routeLoader$(({ url }) => {
  const heroName = url.searchParams.get('heroName') ?? '';
  const heroesWithTerms = heroes.map((heroe) => {
    return {
      ...heroe,
      termsOfSearch: `${heroe.superhero.toLowerCase()} ${heroe.alter_ego.toLowerCase()} ${heroe.first_appearance.toLowerCase()} ${heroe.characters.toLowerCase()} ${heroe.publisher.toLowerCase()} ${heroe.id.toLowerCase()}`,
    };
  });

  const filteredHeroes = heroesWithTerms.filter((heroe) => {
    return heroe.termsOfSearch.includes(heroName.toLowerCase().trim());
  });
  return filteredHeroes;
});

export default component$(() => {
  const filteredHeroes = useLoaderHeroSearch();
  return (
    <div class="px-24 py-4">
      <h2 class="font-bold text-3xl">Search</h2>
      <div class="grid grid-cols-2 gap-4">
        <section>
          <p class="font-semibold text-xl py-4">Searching</p>

          <Form class="flex flex-col gap-2" spaReset>
            <input type="text" name="heroName" class="border p-2 rounded" />
            <button
              type="submit"
              class="rounded px-4 py-2 bg-indigo-400 hover:bg-indigo-600 transition-colors"
            >
              Buscar
            </button>
          </Form>
        </section>

        <div>
          <section>
            <p class="font-semibold text-xl py-4">Results</p>

            <div class="flex flex-col gap-4">
              {filteredHeroes.value.map((hero) => {
                return <HeroCard key={hero.id} hero={hero} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});
