import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface HeroCardProps {
  hero: {
    id: string;
    superhero: string;
    alter_ego: string;
    first_appearance: string;
  };
}

export const HeroCard = component$<HeroCardProps>(({ hero }) => {
  return (
    <section key={hero.id} class="flex gap-4 items-start justify-center">
      <figure class="flex-1 ">
        <img
          src={`/heroes/${hero.id}.jpg`}
          class="w-44 rounded"
          alt={hero.superhero}
        />
      </figure>

      <section class="flex-1 ">
        <header>
          <h2 class="text-3xl font-bold">{hero.superhero}</h2>
          <p class="text-xl">{hero.alter_ego}</p>
        </header>
        <p class="text-md">{hero.first_appearance}</p>
        <Link
          href={`/publisher/${hero.id.split('-')[0]}/${hero.id.split('-')[1]}`}
          class="text-indigo-700 underline"
        >
          Ver Más
        </Link>
      </section>
    </section>
  );
});
