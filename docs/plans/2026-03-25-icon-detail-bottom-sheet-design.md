# Icon Detail Bottom Sheet Design

**Date:** 2026-03-25
**Status:** Approved

## Goal

아이콘 라이브러리의 카드 클릭 시 바텀시트를 열어, 탐색 화면은 가볍게 유지하면서도 개별 아이콘의 원본 SVG, 웹폰트 결과, 복사/다운로드 액션, 메타데이터를 한 곳에서 검토할 수 있게 한다.

## Product Intent

현재 라이브러리는 탐색과 빠른 액션에는 적합하지만, 한 아이콘을 자세히 검토하거나 자산 형식별로 비교하는 흐름은 분산되어 있다. 바텀시트는 다음 역할을 맡는다.

- 카드 그리드는 빠른 탐색 전용으로 유지
- 상세 검토는 바텀시트에서 수행
- 원본 SVG와 웹폰트 결과를 같은 맥락에서 비교
- 복사/다운로드 액션을 상세 컨텍스트 안에서 제공
- 메타데이터는 1차에서 읽기 전용, 2차에서 편집 저장으로 확장

## Scope

### In Scope (Phase 1)

- 그리드/리스트 카드 클릭 시 아이콘 상세 바텀시트 오픈
- 좌측 큰 프리뷰에 원본 SVG 표시
- 좌측 프리뷰에서 키라인 오버레이 토글
- 우측 정보 영역에 웹폰트 관련 정보 표시
- 크기별 웹폰트 프리뷰 섹션 추가
- 상세 액션 제공
  - 글리프 복사
  - 클래스 복사
  - SVG 복사
  - PNG 복사
  - SVG 다운로드
  - PNG 다운로드
- 메타데이터 읽기 전용 표시
  - displayName
  - category
  - keywords
  - synonyms

### Out of Scope (Phase 2)

- 메타데이터 수정/저장
- 저장 충돌 처리
- SVG path 기반 자동 키라인 검증
- 아이콘 간 비교 뷰

## Approaches Considered

### Option 1: Read-First Bottom Sheet (Recommended)

카드 클릭 시 바텀시트를 열고, 상세 보기와 자산 액션을 먼저 제공한다. 메타데이터는 읽기 전용으로 표시하고 저장 기능은 2차로 미룬다.

**Pros**
- 현재 라이브러리 흐름과 가장 자연스럽게 연결됨
- 구현 범위가 명확하고 회귀 위험이 낮음
- 복사/다운로드/검토 가치가 즉시 생김

**Cons**
- 메타데이터 수정은 후속 단계 필요

### Option 2: Full Editor Bottom Sheet

바텀시트 안에 상세 표시와 메타데이터 편집/저장까지 한 번에 넣는다.

**Pros**
- 기능 완성도가 높음

**Cons**
- 저장 UX, 충돌, 실패 처리까지 포함되어 범위가 커짐
- 현재 프론트와 서버 구조를 동시에 확장해야 함

### Option 3: Separate Detail Page

카드 클릭 시 바텀시트가 아니라 별도 상세 페이지 또는 풀스크린 모달로 이동한다.

**Pros**
- 레이아웃 자유도가 높음

**Cons**
- 탐색 맥락이 끊김
- 라이브러리 워크플로우에 비해 무거움

## Recommendation

Option 1을 채택한다. 1차에서는 상세 검토와 자산 액션을 먼저 안정적으로 제공하고, 메타데이터 편집은 2차 기능으로 올린다.

## UX Structure

### 1. Entry

- 그리드 카드 클릭 시 바텀시트 오픈
- 리스트 카드도 동일하게 동작
- 카드 내부 버튼 클릭은 기존 액션을 우선 처리하고, 카드 빈 영역 클릭만 상세 오픈으로 해석한다

### 2. Bottom Sheet Layout

바텀시트는 데스크톱 기준 2열 구조로 구성한다.

#### Left Panel: Source Preview
- 큰 원본 SVG 프리뷰
- 키라인 토글
- 프리뷰 배경은 현재 사이트 톤과 맞는 중립 glass surface
- 키라인은 다음을 오버레이로 표시
  - 외곽 프레임
  - 중심선 십자
  - 원형 키라인

#### Right Panel: Webfont Detail
- 아이콘명
- glyph key
- class key
- 카테고리
- 타입
- 웹폰트 크기별 프리뷰
  - 16 / 20 / 24 / 32 / 48 / 64
- 현재 선택된 두께와 컬러를 웹폰트 프리뷰에 반영

### 3. Action Area

상세 상단 또는 정보 패널 첫 영역에 빠른 액션을 둔다.

- 글리프 복사
- 클래스 복사
- SVG 복사
- PNG 복사
- SVG 다운로드
- PNG 다운로드

리스트 카드의 분산 액션보다 더 명확한 기준점이 되도록, 상세뷰에서는 한 곳에 모아서 제공한다.

### 4. Metadata Section

읽기 전용 블록으로 표시한다.

- displayName
- category
- keywords
- synonyms

표시 원칙
- keywords/synonyms는 chip 또는 comma list로 표시
- 빈 값은 `-` 대신 `등록되지 않음` 같은 명확한 문구 사용

## Interaction Rules

- ESC 또는 바깥 영역 클릭으로 닫기
- 시트가 열린 동안 배경 스크롤 잠금
- 키보드 포커스는 시트 내부에 머물게 유지
- 복사/다운로드 액션은 현재 토스트 시스템 재사용
- 바텀시트 열림 상태에서는 선택 카드 강조 유지

## Responsive Behavior

### Desktop
- 2열 구조 유지
- 좌측 원본 SVG, 우측 웹폰트/정보

### Narrow Width / Mobile
- 세로 스택 구조
- 상단: 원본 SVG 프리뷰
- 하단: 웹폰트 정보 / 프리뷰 / 메타데이터
- 바텀시트 높이는 viewport 기준 최대 높이 사용

## Data Flow

- 카드 클릭 시 현재 `icons` 데이터에서 선택 아이콘 key를 상태로 저장
- 선택 key 기준으로 상세 데이터 계산
- 원본 SVG는 기존 line/fill 정적 파일 경로를 재사용
- 웹폰트 프리뷰는 현재 사용 중인 generated font CSS와 glyph key를 그대로 사용
- 메타데이터는 이미 병합된 `keywords`, `synonyms`, `category`를 사용

## Accessibility

- 바텀시트 컨테이너에 `role="dialog"`와 `aria-modal="true"`
- 닫기 버튼에 명확한 aria-label
- 포커스 트랩 적용
- 액션 버튼은 44x44 이상 보장
- 키라인 토글은 명확한 on/off 상태 표시

## Risks

- 카드 클릭과 내부 버튼 클릭의 이벤트 충돌
- 원본 SVG 프리뷰와 웹폰트 프리뷰가 서로 다른 스타일 기준으로 보여 혼란 가능
- 모바일에서 정보량이 많아져 시트가 과밀해질 수 있음

## Mitigations

- 카드 클릭 오픈 영역과 내부 액션 버튼을 명확히 분리
- 원본 SVG와 웹폰트 프리뷰 섹션 제목을 명확히 둠
- 모바일은 섹션 간격과 타이포 우선순위를 더 강하게 둠

## Phase 2 Preview

후속 단계에서는 상세 바텀시트 안에 `메타데이터 편집` 모드를 추가한다.

예상 기능
- 편집 버튼
- 변경 감지
- 저장/취소
- JSON 저장 API
- 낙관적 UI 대신 명시적 저장 방식
