---
name: korean-planning
description: 모든 기술 설계 및 구현 계획(implementation_plan.md)과 작업 목록(task.md)을 한국어로 작성하도록 강제하는 지침입니다.
---

# 한국어 플랜 및 태스크 작성 지침

이 프로젝트에서 생성되는 모든 **구현 계획(implementation_plan.md)** 및 **작업 목록(task.md)**은 반드시 **한국어**로 작성되어야 합니다.

## 지침 사항

1.  **언어**: 모든 기술적 설명, 목표, 변경 사항 요약, 검증 계획은 한국어로 작성합니다.
2.  **파일 경로 및 코드**: 파일 경로나 코드 관련 용어(함수 이름, 변수명 등)는 영문을 유지하되, 그에 대한 설명은 한국어로 작성합니다.
3.  **형식**: 기존의 `implementation_plan.md` 및 `task.md` 템플릿 구조를 따르되, 내용은 한국어로 채웁니다.
4.  **태스크 바운더리**: `task_boundary` 도구 호출 시 사용하는 `TaskSummary`와 `TaskStatus` 역시 한국어로 작성합니다.

## 예시

### [목표 설명]
아이콘을 웹폰트로 변환하여 관리 효율성을 높입니다.

### Proposed Changes
#### [NEW] [MyIconFont.css](file:///...)
- 폰트 페이스(Font-face) 및 클래스 정의를 포함합니다.
