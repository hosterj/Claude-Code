import './App.css'

// 이 객체의 내용만 바꾸면 페이지 전체가 바뀝니다.
const profile = {
  name: '루피의 일상',
  tagline: '새로운 것을 배우고 만드는 걸 좋아하는 사람입니다.',
  favorites: [
    { emoji: '☕', title: '커피', description: '아침마다 직접 내려 마시는 핸드드립 한 잔' },
    { emoji: '📚', title: '독서', description: '주말 오후에 읽는 에세이와 소설' },
    { emoji: '🚶', title: '산책', description: '생각을 정리해 주는 동네 한 바퀴' },
  ],
  contacts: [
    { label: '이메일', value: 'hosterj@keco.or.kr', href: 'mailto:hello@example.com' },
    { label: 'GitHub', value: 'github.com/username', href: 'https://github.com/username' },
  ],
}

function App() {
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
            <li key={item.title} className="card">
              <span className="emoji" aria-hidden="true">{item.emoji}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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

export default App
