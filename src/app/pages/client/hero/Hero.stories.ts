import type { Meta, StoryObj } from '@storybook/angular'
import { HeroComponent } from './hero.component'
import '@/globals/_variables.scss'

const meta: Meta = {
  component: HeroComponent,
}

export default meta

type Story = StoryObj<HeroComponent>

export const Hero: Story = {
  args: {
    Props: {
      id: 0,
      title: 'John Wick 4 - The Last Stand',
      posterPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fposter-main.jpg?alt=media&token=57c6cc56-9ccf-43b5-b067-d6aee7f8b7c3',
      backdropPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fposter.jpg?alt=media&token=e572a6c2-2b0d-41b3-a68c-7574a5166778',
      overview: 'El infame asesino John Wick continúa su lucha contra la Alta Mesa, la organización criminal global que controla a los asesinos del mundo. Después de los eventos de la tercera película, donde John fue traicionado por Winston y dejado por muerto, se encuentra en una situación aún más peligrosa.',
      genres: ['Action', 'Thriller', 'Crime'],
      cast: [
        {
          name: 'Keanu Reeves',
          character: 'John Wick',
          profilePath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fkeanu-reeves-poster.jpg?alt=media&token=bbcca9d5-6735-4d43-bc5c-d38a3573d94f'
        },
        {
          name: 'Laurence Fishburne',
          character: 'Bowery King',
          profilePath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Flaurence-fishburne-poster.jpg?alt=media&token=6e892858-3902-49d8-ad1b-2faf640639aa'
        },
        {
          name: 'Ian McShane',
          character: 'Winston',
          profilePath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fian-mcshane.jpg?alt=media&token=9c5b9e3b-4d7b-4b6a-9a1f-3b9e5d5f2c5c'
        },
        {
          name: 'Rina Sawayama',
          character: 'Akira',
          profilePath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fjohn-wick-4-rina-sawayama-akira-poster.jpg?alt=media&token=3f3e4d78-1425-49de-8921-5d22eb057a8a'
        },
        {
          name: 'Bill Skarsgård',
          character: 'Marquez de Gramont',
          profilePath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fjohn-wick-4-bill-skarsgard-marquis-poster.jpg?alt=media&token=300bfc66-1bf3-4f33-baad-381b4f3d99d7'
        },
        {
          name: 'Ian McShane',
          character: 'Winston',
          profilePath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fjohn-wick-4-ian-mcshane-as-winston.jpg?alt=media&token=5c5dad94-5582-4032-81c3-4de0e152a33c'
        }
      ],
      trailer: 'https://customer-342mt1gy0ibqe0dl.cloudflarestream.com/728fa59bff4866b9aba6290b60ed0a63/downloads/default.mp4',
      details: {
        releaseDate: '2023-05-17',
        voteAverage: 8.5,
        duration: 120
      }
    },
  }
}
