import {NextResponse} from 'next/server';
import fetch from 'node-fetch';

export async function GET(request) {
    const { searchParams} = new URL(request.url);
    const city = searchParams.get('city');
    const apiKey = '740c26e54e324c5fa3811558252602';

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await response.json();

    return NextResponse.json(data.current);
}