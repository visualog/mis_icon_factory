# 웹 디자인 가이드라인 스킬 설치 및 UI 감사 계획

## 개요
Vercel Labs의 `web-design-guidelines` 에이전트 스킬을 프로젝트에 설치하고, 이를 활용하여 현재 개발된 '아이콘 팩토리' 웹 애플리케이션의 UI/UX 품질을 점검합니다.

## 목표
1.  **스킬 설치**: `.agent/skills` 디렉토리에 웹 디자인 가이드라인 스킬을 구성합니다.
2.  **UI 감사(Audit)**: 설치된 스킬을 사용하여 `font_factory/public/index.html` 파일의 접근성, 디자인 일관성, 마크업 표준을 검사합니다.
3.  **개선 사항 도출**: 감사 결과를 바탕으로 필요한 수정 사항을 리포트합니다.

## 변경되는 파일

### [NEW] [.agent/skills/web-design-guidelines/SKILL.md](file:///Users/im_018/Documents/GitHub/Project/IconFont/.agent/skills/web-design-guidelines/SKILL.md)
- 스킬의 메타데이터와 동작 지침을 정의하는 파일입니다.
- 실행 시 외부 가이드라인 소스를 참조하여 리뷰를 수행하도록 설정됩니다.

### [REF] [font_factory/public/index.html](file:///Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html)
- 스킬 실행 후 리뷰 대상이 되는 파일입니다. (직접 수정은 리뷰 결과에 따름)

## 검증 계획
1.  스킬 파일(`SKILL.md`)이 정상적으로 생성되었는지 확인합니다.
2.  에이전트에게 "아이콘 팩토리 UI 리뷰해줘"라고 요청했을 때, 스킬이 트리거되어 분석 리포트가 생성되는지 확인합니다.
