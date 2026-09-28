// 커피 레시피 목록입니다. 새 레시피는 이 배열에 객체를 하나 추가하면 됩니다.
// id는 주소(#/coffee/<id>)에 쓰이므로 영문 소문자와 - 로만 적습니다.
// steps의 add는 이번에 붓는 양, total은 누적 양(ml)입니다.
export const recipes = [
  {
    id: 'hand-drip-iced-1',
    name: '핸드드립 아이스 1인분',
    summary: '92℃ · 원두 16.5g · 총 150ml',
    prep: [
      { label: '물 온도', value: '92℃' },
      { label: '원두', value: '16.5g, 가는 분쇄도' },
      { label: '얼음', value: '서버에 100g' },
    ],
    steps: [
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
]
