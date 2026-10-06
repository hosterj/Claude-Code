// 레시피 모음입니다. 카테고리(요리, 커피)별로 나뉘어 있고,
// 새 레시피는 해당 카테고리의 recipes 배열에 객체를 하나 추가하면 됩니다.
// 카테고리 키와 레시피 id는 주소(#/<카테고리>/<id>)에 쓰이므로 영문 소문자와 - 로만 적습니다.
//
// 레시피에 쓸 수 있는 항목 (모두 선택, 있는 것만 화면에 나옵니다)
// - prep:  준비물 목록 [{ label, value }]
// - pours: 커피 추출 표 [{ time, add, total }] — add는 이번에 붓는 양, total은 누적 양(ml)
// - steps: 순서대로 하는 과정 ['...', '...']
// - notes: 메모 ['...']
export const categories = {
  cooking: {
    title: '🍳 요리 레시피',
    subtitle: '간단하게 만들어 먹는 요리 레시피 모음',
    recipes: [
      {
        id: 'steamed-egg-1',
        name: '간단 계란찜 1인분',
        summary: '전자레인지 2분',
        prep: [
          { label: '계란', value: '1인분' },
          { label: '물', value: '약간 (약 30ml)' },
          { label: '다시다 가루', value: '약간' },
          { label: '멸치액젓', value: '진짜 쪼금' },
        ],
        steps: [
          '계란을 풀고 물을 약간(약 30ml) 넣어 섞기',
          '다시다 가루 약간 넣기',
          '멸치액젓 진짜 쪼금 넣기',
          '전자레인지에 2분 돌리기',
        ],
      },
    ],
  },
  coffee: {
    title: '☕ 커피 레시피',
    subtitle: '직접 만들어 본 커피 레시피 모음',
    recipes: [
      {
        id: 'hand-drip-iced-1',
        name: '핸드드립 아이스 1인분',
        summary: '92℃ · 원두 16.5g · 총 150ml',
        prep: [
          { label: '물 온도', value: '92℃' },
          { label: '원두', value: '16.5g, 가는 분쇄도' },
          { label: '얼음', value: '서버에 100g' },
        ],
        pours: [
          { time: '00:00', add: 30, total: 30 },
          { time: '00:30', add: 40, total: 70 },
          { time: '01:00', add: 40, total: 110 },
          { time: '01:30', add: 40, total: 150 },
        ],
        notes: [
          '얇은 물줄기로 붓기',
          '2분 초반대에 추출 완료',
          '추출 후 온도를 낮추기 위해 스터링',
          '15.5g',
        ],
      },
    ],
  },
}
