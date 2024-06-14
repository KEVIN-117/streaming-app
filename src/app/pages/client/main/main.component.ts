import {Component, ElementRef, ViewChild} from '@angular/core';
import {HeroComponent} from "@pages/client/hero/hero.component";
import {fromEvent, Subscription} from "rxjs";
import {MovieProps} from "@pages/client/hero/types";
import {ButtonComponent} from "@components/button/button.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    ButtonComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild(HeroComponent) videoChild!: HeroComponent;
  private scrollSubscription!: Subscription;

  protected readonly moviesData: MovieProps[] = [
    {
      id: 0,
      title: 'John Wick 4 - The Last Stand',
      posterPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fposter-main.jpg?alt=media&token=57c6cc56-9ccf-43b5-b067-d6aee7f8b7c3',
      backdropPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fposter.jpg?alt=media&token=e572a6c2-2b0d-41b3-a68c-7574a5166778',
      overview: 'El infame asesino John Wick continúa su lucha contra la Alta Mesa, la organización criminal global que controla a los asesinos del mundo. Después de los eventos de la tercera película, donde John fue traicionado por Winston y dejado por muerto, se encuentra en una situación aún más peligrosa.',
      genres: ['Action', 'Thriller', 'Crimen'],
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
    {
      id: 1,
      title: 'Avatar: The Way of Water',
      posterPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Favatar-the-way-of-water-movie-poster-phone.jpg?alt=media&token=cda08537-b31c-4da5-bc4f-52a5c3346140',
      backdropPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Favatar-the-way-of-water-movie-poster.jpg?alt=media&token=71639c2f-15b9-4fd2-8cb4-49c251c7a267',
      overview: 'Jake Sully vive con su nueva familia en el planeta Pandora. Una amenaza conocida regresa para terminar lo que comenzó, obligando a Jake a trabajar con Neytiri y el ejército de la raza Na\'vi para proteger su planeta.',
      genres: ['Action', 'Adventure', 'Fantasy'],
      cast: [
        {
          name: 'Sam Worthington',
          character: 'Jake Sully',
          profilePath: 'https://example.com/sam-worthington.jpg'
        },
        {
          name: 'Zoe Saldana',
          character: 'Neytiri',
          profilePath: 'https://example.com/zoe-saldana.jpg'
        },
        {
          name: 'Sigourney Weaver',
          character: 'Kiri',
          profilePath: 'https://example.com/sigourney-weaver.jpg'
        }
      ],
      trailer: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/trailers%2FAvatarTheWayWater.mp4?alt=media&token=7ba86a20-4025-43fe-86ad-ed94a00a9cf7',
      details: {
        releaseDate: '2023-12-16',
        voteAverage: 8.3,
        duration: 192
      }
    },
    {
      id: 2,
      title: 'Doctor Strange in the Multiverse of Madness',
      posterPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fdoctor-strange-in-the-multiverse-of-madness-phone.jpg?alt=media&token=80b9b7c5-6ec4-48a3-9ba4-7e879dfe7fc4',
      backdropPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fscarlet-witch-and-doctor-strange-in-the-multiverse-of-madness.jpg?alt=media&token=bd075860-825f-4d8a-8497-4e11b0ad6de2',
      overview: 'Doctor Strange, con la ayuda de aliados místicos antiguos y nuevos, recorre las alucinantes y peligrosas realidades alternativas del Multiverso para enfrentarse a un misterioso nuevo adversario.',
      genres: ['Action', 'Adventure', 'Fantasy'],
      cast: [
        {
          name: 'Benedict Cumberbatch',
          character: 'Doctor Stephen Strange',
          profilePath: 'https://example.com/benedict-cumberbatch.jpg'
        },
        {
          name: 'Elizabeth Olsen',
          character: 'Wanda Maximoff / Scarlet Witch',
          profilePath: 'https://example.com/elizabeth-olsen.jpg'
        },
        {
          name: 'Chiwetel Ejiofor',
          character: 'Baron Karl Mordo',
          profilePath: 'https://example.com/chiwetel-ejiofor.jpg'
        }
      ],
      trailer: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/trailers%2FMarvelStudiosDoctorStrangeMultiverseMadness.mp4?alt=media&token=806a32a2-a77c-468f-956a-586c3f4dab51',
      details: {
        releaseDate: '2023-05-06',
        voteAverage: 7.5,
        duration: 126
      }
    },
    {
      id: 3,
      title: 'Jurassic World Dominion',
      posterPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fjurassic-world-dominion-poster-phone.jpg?alt=media&token=21ac75e7-b8d5-4179-9065-05e3968f4888',
      backdropPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fjurassic-world-dominion-logo.jpg?alt=media&token=b573dab4-f3a5-4dcf-b29d-4df0c7582168',
      overview: 'Cuatro años después de la destrucción de Isla Nublar, los dinosaurios ahora viven y cazan junto a los humanos en todo el mundo. Este frágil equilibrio redefinirá el futuro y determinará, de una vez por todas, si los humanos seguirán siendo los depredadores supremos en un planeta que comparten con las criaturas más temibles de la historia.',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      cast: [
        {
          name: 'Chris Pratt',
          character: 'Owen Grady',
          profilePath: 'https://example.com/chris-pratt.jpg'
        },
        {
          name: 'Bryce Dallas Howard',
          character: 'Claire Dearing',
          profilePath: 'https://example.com/bryce-dallas-howard.jpg'
        },
        {
          name: 'Sam Neill',
          character: 'Dr. Alan Grant',
          profilePath: 'https://example.com/sam-neill.jpg'
        }
      ],
      trailer: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/trailers%2FJURASSICWORLDDOMINION.mp4?alt=media&token=32e32b1d-5095-4a3a-abad-7ae685ff4b99',
      details: {
        releaseDate: '2023-06-10',
        voteAverage: 6.7,
        duration: 146
      }
    },
    {
      id: 4,
      title: 'Black Panther: Wakanda Forever',
      posterPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fblack-panther-wakanda-forever-movie-poster-phone.jpg?alt=media&token=21329657-3fe8-4440-ad3d-3f32dd831332',
      backdropPath: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/uploads%2Fshuri-black-panther-2-movie-4k-wallpaper-uhdpaper.com-302%401%40j.jpg?alt=media&token=600a669a-c1cc-493c-a839-6b2fb77f6a67',
      overview: 'Los líderes del reino de Wakanda luchan por proteger su nación de las fuerzas invasoras en ausencia de su querido Rey TChalla.',
      genres: ['Action', 'Adventure', 'Drama'],
      cast: [
        {
          name: 'Letitia Wright',
          character: 'Shuri',
          profilePath: 'https://example.com/letitia-wright.jpg'
        },
        {
          name: 'Lupita Nyong\'o',
          character: 'Nakia',
          profilePath: 'https://example.com/lupita-nyongo.jpg'
        },
        {
          name: 'Danai Gurira',
          character: 'Okoye',
          profilePath: 'https://example.com/danai-gurira.jpg'
        }
      ],
      trailer: 'https://firebasestorage.googleapis.com/v0/b/auth-example-9a434.appspot.com/o/trailers%2FBlackPantherWakandaForever.mp4?alt=media&token=c861c838-5a3e-4419-a68d-95f0d079b34b',
      details: {
        releaseDate: '2023-11-11',
        voteAverage: 7.8,
        duration: 161
      }
    }
  ]

  handlePlay(isMuted: boolean): void {
    isMuted = !isMuted;
  }

  ngAfterViewInit(): void {
    console.log('AppComponent view initialized')
    if (this.scrollContainer) {
      const scroll$ = fromEvent(this.scrollContainer.nativeElement, 'scroll');
      const current = this.videoChild.videoElement.nativeElement.children[0];
      scroll$.subscribe(() => {
        const all = document.querySelectorAll('video')
        all.forEach((video) => {
          video.muted = true;
          this.videoChild.updateIsMuted();
        })
      });
    }
  }
  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
