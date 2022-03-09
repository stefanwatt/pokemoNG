export default async () => {
  const res = await fetch(
    'https://grape-deserted-stamp.glitch.me/api?t=all&n=6&r=johto'
  )
  const { data } = await res.json()
  return data
}
