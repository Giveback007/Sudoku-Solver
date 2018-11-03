import * as fetchJsonp from 'fetch-jsonp';

export const jsonp = async <T = any>(url): Promise<T> => (await fetchJsonp(url)).json();
