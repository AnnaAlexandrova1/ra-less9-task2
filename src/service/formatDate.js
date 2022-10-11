export default function formatDate(data) {
    const created = new Date(data);
    const date = created.toLocaleDateString();
    const time = created.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' });
    return `${time} ${date}`;
}