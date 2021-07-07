## 개요 📝
Nest를 이용한 REST API를 개발하려고 합니다.
DB연동과 보안을 위하여 [JWT](https://jwt.io/)를 사용한 인증 시스템을 사용합니다.
## 사용기술 ☄️
|분야|기술|
|:---:|:---:|
|DB|MySQL|
|framework|NestJS|
|language|TypeScript|
|ORM|TypeORM|
|API|REST API|
|module|Passport, JWT, Bcrypt|
## 개발환경 💻
- Mac OS
- VS Code
- Git
## Commit message 컨벤션
history를 트래킹 할 수 있도록 큰 이벤트마다 여러 번 구분하여 커밋하도록 합니다.
> 핵심 가치는 `commit type`만으로 해당 커밋을 유추할 수 있어야 합니다.

|type|내용|
|:---:|---|
|init|hello, world 수준의 동작이 검증된 첫 파일을 추가할 때|
|add|코드나 테스트, 예제, 문서 등의 추가|
|del|파일 또는 코드, 리소스가 제거|
|up|원래도 정상동작 하지만 추가 보안 하는 개념|
|refactor|코드 리팩토링 (변수명 수정 등) 기능에는 변함이 없음|
|style|코드 인덴트 변경으로 인한 코드 스타일 변경, 코드 자체 변경이 없는 경우|
|fix|올바르지 않은 동작을 고친 경우|
|move|코드 및 파일의 이동|
|rename|파일명 변경|
|package|package.json 수정|
|docs|문서 수정|
