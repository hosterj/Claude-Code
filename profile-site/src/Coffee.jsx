import { recipes } from './recipes.js'

// 커피 레시피 목록 페이지 (#/coffee)
export function CoffeeList() {
  return (
    <div className="page">
      <a className="back" href="#/">← 돌아가기</a>
      <header className="sub-hero">
        <h1>☕ 커피 레시피</h1>
        <p className="tagline">직접 만들어 본 커피 레시피 모음</p>
      </header>

      <ul className="recipe-list">
        {recipes.map((r) => (
          <li key={r.id}>
            <a className="card card-link recipe-card" href={`#/coffee/${r.id}`}>
              <h3>{r.name}</h3>
              <p>{r.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// 레시피 상세 페이지 (#/coffee/<id>)
export function RecipeDetail({ id }) {
  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) {
    return (
      <div className="page">
        <a className="back" href="#/coffee">← 레시피 목록</a>
        <p className="empty">레시피를 찾을 수 없어요.</p>
      </div>
    )
  }

  return (
    <div className="page">
      <a className="back" href="#/coffee">← 레시피 목록</a>
      <header className="sub-hero">
        <h1>{recipe.name}</h1>
        <p className="tagline">{recipe.summary}</p>
      </header>

      <section className="recipe-section">
        <h2>준비</h2>
        <dl className="prep">
          {recipe.prep.map((p) => (
            <div key={p.label}>
              <dt>{p.label}</dt>
              <dd>{p.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="recipe-section">
        <h2>추출</h2>
        <table className="steps">
          <thead>
            <tr>
              <th>시간</th>
              <th>붓는 양</th>
              <th>누적</th>
            </tr>
          </thead>
          <tbody>
            {recipe.steps.map((s) => (
              <tr key={s.time}>
                <td>{s.time}</td>
                <td>{s.add === s.total ? `${s.add}ml` : `+${s.add}ml`}</td>
                <td>{s.total}ml</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {recipe.notes.length > 0 && (
        <section className="recipe-section">
          <h2>메모</h2>
          <ul className="notes">
            {recipe.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
