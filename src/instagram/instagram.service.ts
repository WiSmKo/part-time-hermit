import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class InstagramService {
    
    private readonly BASE_URL = 'https://graph.instagram.com';

    constructor(private httpService: HttpService) {}

    getUserMedia(accessToken: string, userId: string): Observable<AxiosResponse> {
        const url = `${this.BASE_URL}/${userId}/media`;
        const params = {
            fields: `id,caption,media_type,media_url,thumbnail_url,timestamp,permalink`,
            access_token: accessToken,
        };
        return this.httpService.get(url, { params }).pipe(map((response: AxiosResponse) => response.data));
    }

    getMediaDetails(accessToken: string, mediaId: string): Observable<AxiosResponse> {
        const url = `${this.BASE_URL}/${mediaId}`;
        const params = {
            fields: `id,caption,media_type,media_url,thumbnail_url,timestamp,permalink`,
            access_token: accessToken,
        };
        return this.httpService.get(url, { params }).pipe(map((response: AxiosResponse) => response.data));
    }

}
