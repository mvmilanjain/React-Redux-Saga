export const getDateTime = dateTime => {
    const options = {
        month: '2-digit',
        year: 'numeric',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric'
    };
    return new Date(dateTime).toLocaleDateString('en-IN', options);
}