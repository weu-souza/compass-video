
import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyASTfeIMjUNslIv34Umfp_-JOSTs0KtMf8'; //api Weuller
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export interface VideoItem {
    id: string;
    title: string;
    thumbnail: string;
}

export async function searchVideosByTitle(title: string): Promise<VideoItem[]> {
    try {
        const response = await axios.get(YOUTUBE_API_URL, {
            params: {
                key: YOUTUBE_API_KEY,
                q: title,
                part: 'snippet',
                type: 'video',
                maxResults: 10, 
            },
        });

        const videos: VideoItem[] = response.data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
        }));
        console.log('videos', videos);
        return videos;
    } catch (error) {
        console.error('Erro ao buscar vídeos do YouTube:', error);
        return [];
    }
}

