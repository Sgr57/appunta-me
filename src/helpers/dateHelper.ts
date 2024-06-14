export const formatDate = (timestamp: number) => {
  if (!timestamp) return
  const formatter = new Intl.DateTimeFormat('it', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  return formatter.format(new Date(timestamp))
}