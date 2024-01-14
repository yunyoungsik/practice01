# Promtopia
<img width="100%" src="https://github.com/yunyoungsik/promptopia/blob/main/public/assets/images/thumbnail.jpg?raw=true" />
사용자에게 AI-Powered Prompts를 탐색하고 공유할 수 있는 기회를 제공합니다. 깔끔한 디자인과 함께 간략한 설명을 제공하여 사용자가 페이지를 이해하고 쉽게 접근할 수 있도록 합니다.<br />
또한, 메인페이지에는 Feed 컴포넌트가 있어 사용자들이 AI 프롬프트를 발견하고 공유할 수 있습니다. 프롬프트 소개하고, 창의적인 프롬프트를 찾고 만들고 공유하는 현대적인 방법을 제공합니다.<br />

[참고영상](https://www.youtube.com/watch?v=wm5gMKuwSYk&list=PLae0MNlb0EigrgB0rMwE2j9wu-BX5YdqT&index=1)

## 설치
```js
npx create-next-app@letest .   
npm install bcrypt   
npm install mongodb   
npm install mongoose   
npm install next-auth
```
## 설명
- Home<br />
홈 페이지의 주요 섹션을 표시합니다.<br/>
"프롬토피아(Promptopia)"라는 오픈 소스 AI 프롬프팅 도구를 소개하는 제목과 설명합니다.<br />
Feed 컴포넌트를 가져와서 표시하며, 사용자가 작성한 최신 프롬프트의 피드를 렌더링합니다.<br />
   
- Feed<br />
프롬프트의 피드를 렌더링합니다.<br />
React의 상태 관리(useState)를 사용하여 게시물, 검색 텍스트 및 검색된 결과를 관리합니다.<br />
fetchPosts: API 엔드포인트(/api/prompt)에서 프롬프트를 가져와 posts 상태를 업데이트합니다.<br />
filterPrompts: 검색 텍스트(사용자 이름, 태그 또는 프롬프트 내용)를 기반으로 게시물을 필터링합니다.<br />
handleSearchChange: 검색 입력란의 변경을 처리하고, 짧은 지연 후 프롬프트 필터링을 트리거합니다.<br />
handleTagClick: 클릭한 태그를 기반으로 프롬프트를 필터링하고, 검색 텍스트를 업데이트하여 필터링된 결과를 표시합니다.<br />
   
- Nav<br />
네비게이션 바를 구현합니다.<br />
로고, 로그인/로그아웃 버튼, 프로필 이미지, 프로필 및 게시물 생성 링크가 포함된 컴포넌트입니다.<br />
useSession()을 통해 현재 세션 정보를 가져와 사용자가 로그인했는지 확인합니다.<br />
getProviders()를 사용하여 인증 공급자 정보를 가져와 로그인 버튼을 생성합니다.<br />
사용자가 로그인한 경우에는 프로필 이미지, 로그아웃 버튼, 게시물 생성 버튼이 보여집니다.<br />
모바일 화면에서는 토글 버튼을 눌러 드롭다운 메뉴를 열고 닫을 수 있습니다.<br />
전체적으로 이 코드는 세션 정보에 따라 로그인 상태에 따른 다른 네비게이션 요소를 보여주고, 모바일 환경에서는 드롭다운 메뉴를 토글할 수 있는 방식으로 구성되어 있습니다.<br />
   
- Profile<br />
프로필 페이지를 구현합니다.<br />
이름, 이메일, 설명, 사용자가 생성한 데이터를 보여주는 섹션으로 구성되어 있습니다.<br />
name: 프로필 이름을 나타내며, 파란 그라데이션으로 스타일링되어 표시됩니다.<br />
desc: 프로필에 대한 설명을 나타내며, 텍스트로 표시됩니다.<br />
data: 사용자가 생성한 데이터를 나타내며, PromptCard 컴포넌트를 통해 각각의 데이터를 렌더링합니다.<br />
handleEdit 및 handleDelete: 각 데이터 항목에 대한 수정 및 삭제 기능을 수행하는 함수들을 전달합니다.<br />
   
- PromptCard<br />
각각의 프롬프트 카드를 표시합니다.<br />
사용자 정보, 프롬프트 텍스트, 태그, 그리고 수정 및 삭제 버튼(작성자에 한해 표시)을 포함합니다.<br />
useSession()을 통해 현재 세션 정보를 가져옵니다.<br />
usePathname()과 useRouter()를 통해 현재 경로 정보와 라우터를 가져옵니다.<br />
프로필 이미지, 사용자 이름, 이메일, 프롬프트 텍스트, 태그 등의 정보를 보여줍니다.<br />
복사 버튼을 클릭하여 프롬프트 텍스트를 클립보드에 복사하고 복사 완료 시 알림을 제공합니다.<br />
현재 사용자가 프롬프트의 작성자인 경우 해당 프롬프트의 수정 및 삭제 버튼을 표시합니다.<br />
   
- Provider<br />
next-auth의 SessionProvider를 이용하여 세션 정보를 전달하는 역할을 합니다.<br />
SessionProvider를 통해 세션 정보를 받아서 하위 컴포넌트에 전달하는 역할을 합니다.<br />
SessionProvider를 통해 전달된 세션 정보를 하위 컴포넌트(children)에 제공합니다.<br />
session 객체를 받아서 해당 세션 정보를 하위 컴포넌트로 전달합니다.<br />
   
## 트러블슈팅
문제: 마이페이지에서 사용자가 작성한 피드를 불러오지 못하는 이슈 발생   
해결: Next.js의 폴더 구조를 수정하였습니다.   
```
이전 폴더 경로: api/users/route.js
변경된 경로: api/users/[id]/posts/routes.js
```
마이페이지에서 사용자가 작성한 피드를 불러오지 못하는 문제를 해결하기 위해 Next.js의 폴더 경로를 수정하였습니다.<br />
이전에는 api/users/route.js 경로를 사용하고 있었으나, 이를 변경하여 api/users/[id]/posts/routes.js로 수정하였습니다.
