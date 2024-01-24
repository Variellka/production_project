export function getQueryParams(params: Record<string, string | undefined>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined && value !== '') {
            searchParams.set(name, value);
        }
    });

    return `?${searchParams.toString()}`;
}

// функция добавления параммекнтров строки запроса в URL

export function addQueryParams(params: Record<string, string | undefined>) {
    window.history.pushState(null, '', getQueryParams(params));
}
