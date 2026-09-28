import { useEffect, useState } from 'react'
import { CoffeeList, RecipeDetail } from './Coffee.jsx'
import './App.css'

// 이 객체의 내용만 바꾸면 페이지 전체가 바뀝니다.
const profile = {
  name: '루피의 일상',
  tagline: '새로운 것을 배우고 만드는 걸 좋아하는 사람입니다.',
  favorites: [
    // link가 있는 카드는 클릭하면 해당 페이지로 이동합니다.
    { emoji: '☕', title: '커피', description: '아침마다 직접 내려 마시는 핸드드립 한 잔', link: '#/coffee' },
    { emoji: '📚', title: '독서', description: '주말 오후에 읽는 에세이와 소설' },
    { emoji: '🚶', title: '산책', description: '생각을 정리해 주는 동네 한 바퀴' },
  ],
  contacts: [
    { label: '이메일', value: 'hosterj@keco.or.kr', href: 'mailto:hello@example.com' },
    { label: 'GitHub', value: 'github.com/username', href: 'https://github.com/username' },
  ],
}

// 주소의 # 뒤 부분(예: #/coffee)을 읽어서 현재 페이지를 정합니다.
function useHashPath() {
  const read = () => window.location.hash.slice(1) || '/'
  const [path, setPath] = useState(read)

  useEffect(() => {
    const onChange = () => setPath(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  // 새 페이지가 그려진 뒤 맨 위로 스크롤합니다.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return path
}

function App() {
  const path = useHashPath()

  if (path === '/coffee') return <CoffeeList />
  if (path.startsWith('/coffee/')) return <RecipeDetail id={path.slice('/coffee/'.length)} />
  return <Home />
}

function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
      </header>

      <main>
        <h2>좋아하는 것</h2>
        <ul className="favorites">
          {profile.favorites.map((item) => (
            <li key={item.title}>
              {item.link ? (
                <a className="card card-link" href={item.link}>
                  <FavoriteContent item={item} />
                  <span className="more">레시피 보기 →</span>
                </a>
              ) : (
                <div className="card">
                  <FavoriteContent item={item} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>

      <footer className="contact">
        <h2>연락처</h2>
        <ul>
          {profile.contacts.map((c) => (
            <li key={c.label}>
              <span className="label">{c.label}</span>
              <a href={c.href} target="_blank" rel="noreferrer">{c.value}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}

function FavoriteContent({ item }) {
  return (
    <>
      <span className="emoji" aria-hidden="true">{item.emoji}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </>
  )
}

export default App
