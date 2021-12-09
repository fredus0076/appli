import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/** on remplace le TranslateHttpLoader par cette classe qui simule le TranslateHttpLoader
*
*  export class TranslateHttpLoader implements TranslateLoader {
*    constructor(private http: HttpClient, public prefix: string = "/assets/i18n/", public suffix: string = ".json") {}
*
*    // Gets the translations from the server
*    public getTranslation(lang: string): Observable<Object> {
*      return this.http.get(`${this.prefix}${lang}${this.suffix}`);
*    }
*  }
*
* fonction de base pour useFactory
* Elle recupere les assets/i18n/en.json en fonction des path et les places dans un tableau
* puis concatene les deux tableau pour au final créer un seul et meme fichier en.json
* [
*      { "TITLE": "TOTO est content" },
*      { "PORTAIL_TITLE": "Title pour voir si sa fonctionne !" }
*  ]
*
*  vers
*
*  { "TITLE": "TOTO est content", "PORTAIL_TITLE": "Title pour voir si sa fonctionne !" }
*/
export class TranslateCustomLoaderClass implements TranslateLoader {
  translateRequests: Observable<object>[] = []

  constructor(private httpClient: HttpClient) {}

  /**
   * Recupere tous les i18n des differents microservices les concatènes et enn renvoie un unique contenant tous les autres
   * @param lang 'en', 'fr', 'ru', etc..
   * @returns { "TITLE": "TOTO est content", "PORTAIL_TITLE": "Title pour voir si sa fonctionne !" }
   */
  getTranslation(lang: string): Observable<any> {
    this.stockageTranslationRequest(lang)
    return forkJoin(this.translateRequests).pipe(
      map((appsTranslations: Array<object>) => {
        const allTranslations = {};
        appsTranslations.forEach((obj) => {
          Object.assign(allTranslations, obj);
        });
        return allTranslations;
      }))
  }

  /**
   * stock les different i18n dans this.translateRequests
   * @param lang 'en', 'fr', 'ru', etc..
   */
  stockageTranslationRequest(lang: string) {
    environment.i18nPaths.forEach(path => {
      this.translateRequests.push(this.translationRequest(path, lang))
    })
  }

  /**
   * Recupère les i18n des differents projet en fonction du path appelé
   * @param appUrl 'http://localhost:3003'
   * @param lang 'en', 'fr', 'ru', etc..
   * @returns { "TITLE": "TOTO est content" }
   */
  translationRequest(appUrl: string, lang: string): Observable<object> {
    return this.httpClient.get(appUrl + '/assets/i18n/' + lang + '.json')
      .pipe(catchError(err => of(undefined)));
  }
}
