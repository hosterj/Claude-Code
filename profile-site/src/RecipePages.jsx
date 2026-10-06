import { categories } from './recipes.js'

// 레시피 목록 페이지 (#/<카테고리>, 예: #/coffee)
export function RecipeList({ category }) {
  const cat = categories[category]

  return (
    <div className="page">
      <a className="back" href="#/">← 돌아가기</a>
      <header className="sub-hero">
        <h1>{cat.title}</h1>
        <p className="tagline">{cat.subtitle}</p>
      </header>

      <ul className="recipe-list">
        {cat.recipes.map((r) => (
          <li key={r.id}>
            <a className="card card-link recipe-card" href={`#/${category}/${r.id}`}>
              <h3>{r.name}</h3>
              <p>{r.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// 레시피 상세 페이지 (#/<카테고리>/<id>)
export function RecipeDetail({ category, id }) {
  const recipe = categories[category].recipes.find((r) => r.id === id)
  const back = <a className="back" href={`#/${category}`}>← 레시피 목록</a>

  if (!recipe) {
    return (
      <div className="page">
        {back}
        <p className="empty">레시피를 찾을 수 없어요.</p>
      </div>
    )
  }

  return (
    <div className="page">
      {back}
      <header className="sub-hero">
        <h1>{recipe.name}</h1>
        <p className="tagline">{recipe.summary}</p>
      </header>

      {(recipe.ingredients || recipe.prep) && (
        <section className="recipe-section">
          <h2>준비</h2>
          {recipe.ingredients && (
            <p className="ingredients">{recipe.ingredients.join(', ')}</p>
          )}
          {recipe.prep && (
            <dl className="prep">
              {recipe.prep.map((p) => (
                <div key={p.label}>
                  <dt>{p.label}</dt>
                  <dd>{p.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      )}

      {recipe.pours && (
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
              {recipe.pours.map((s) => (
                <tr key={s.time}>
                  <td>{s.time}</td>
                  <td>{s.add === s.total ? `${s.add}ml` : `+${s.add}ml`}</td>
                  <td>{s.total}ml</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {recipe.steps && (
        <section className="recipe-section">
          <h2>만드는 법</h2>
          <ol className="howto">
            {recipe.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>
      )}

      {recipe.notes && (
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
