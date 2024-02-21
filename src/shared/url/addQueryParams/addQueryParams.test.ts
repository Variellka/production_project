import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('with one param', () => {
        expect(getQueryParams({ order: 'asc' })).toBe('?order=asc');
    });
    test('with multiple param', () => {
        expect(getQueryParams({
            order: 'asc',
            sort: 'views',
            search: 'java',
        })).toBe('?order=asc&sort=views&search=java');
    });
    test('with undefined param', () => {
        expect(getQueryParams({
            order: 'asc',
            sort: undefined,
        })).toBe('?order=asc');
    });
});
