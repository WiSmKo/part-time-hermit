import { Controller, Get, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { InstagramService } from './instagram.service';

@Controller('instagram')
export class InstagramController {
    constructor(private readonly instagramService: InstagramService) {}

    @Get('user-media')
    getUserMedia(@Query('accessToken') accessToken: string, @Query('userId') userId: string): Observable<AxiosResponse> {
        return this.instagramService.getUserMedia(accessToken, userId);
    }

    @Get('media-details')
    getMediaDetails(@Query('accessToken') accessToken: string, @Query('mediaId') mediaId: string): Observable<AxiosResponse> {
        return this.instagramService.getMediaDetails(accessToken, mediaId);
    }
}
