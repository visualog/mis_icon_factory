# 디자인 리뷰 로그

## 2026-01-27T09:04:12+09:00 - UI 감사 (font_factory/public/index.html)

### 🚩 발견된 문제점 (Findings)

**1. 성능 및 안티패턴 (Performance & Anti-patterns)**
*   **파일**: `font_factory/public/index.html:111`
*   **문제**: `.icon-card` 클래스에 `transition: all 0.2s;`가 사용됨.
*   **가이드라인**: `transition: all`은 성능 이슈를 유발하므로 절대 사용하지 말 것.
*   **해결책**: 변경되는 속성만 명시적으로 나열 (예: `transition: transform 0.2s, box-shadow 0.2s;`).

**2. 성능 (가상화 - Virtualization)**
*   **파일**: `font_factory/public/index.html:283`
*   **문제**: 가상화 없이 많은 수의 아이콘 리스트가 렌더링됨.
*   **가이드라인**: 50개 이상의 리스트 항목은 가상화 또는 `content-visibility: auto` 사용 권장.
*   **해결책**: `.icon-card`에 `content-visibility: auto` 속성 추가.

**3. 접근성 (포커스 - Focus)**
*   **파일**: `font_factory/public/index.html` (전체)
*   **문제**: 인터랙티브 요소(`buildBtn`, inputs)에 명시적인 `:focus-visible` 스타일이 없음.
*   **가이드라인**: 인터랙티브 요소는 눈에 띄는 포커스 링이 필요함.

**4. 타이포그래피 (Typography)**
*   **파일**: `font_factory/public/index.html:337`
*   **문제**: 말줄임표 `…` 대신 마침표 3개 `...` 사용.
*   **가이드라인**: 올바른 말줄임표 문자 `…` 사용.

**5. 내비게이션 및 상태 (Navigation & State)**
*   **문제**: 뷰 상태(선 두께, 크기)가 URL에 동기화되지 않음.
*   **가이드라인**: URL은 UI 상태를 반영해야 함.

**6. 터치 및 인터랙션 (Touch & Interaction)**
*   **문제**: `touch-action: manipulation` 및 안전 영역(safe area) 설정 누락.
*   **가이드라인**: 터치 및 노치 디바이스 최적화 필요.
