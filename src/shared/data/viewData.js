import coffeeOrderVideo from 'src/assets/video/coffeeOrder.mp4';
import cineAiVideo from 'src/assets/video/cineAI.mp4';
import marryVideo from 'src/assets/video/marry.mp4';
import sermonVideo from 'src/assets/video/sermon.mp4';

export const viewData = [
    {
        id: "project_0",
        src: coffeeOrderVideo,
        title: "CoffeeOrderApp",
        tagline: "Next.js App Router와 API Routes 기반의 커피 주문 및 관리자 PWA",
        tagEx: "Next.js App Router와 API Routes 기반의 모바일 커피 주문 및 관리자 전용 웹 애플리케이션입니다. 모바일 환경에서 앱처럼 편리하게 커피를 주문하고 결제할 수 있는 PWA 기반 웹 서비스로 기획했습니다. 실제 나이스페이 결제 및 웹훅 연동, MongoDB를 활용한 주문·재고 관리, 데이터 처리 과정에서의 레이스 조건 방지 등 실무적인 동작 프로세스를 고려하여 구현했습니다.",
        serviceUrl: "https://jongju-coffee-order-app.vercel.app/",
        adminUrl: "https://jongju-coffee-order-app.vercel.app/admin/admin_login",
        githubUrl: "https://github.com/seongjongju/CoffeeOrder-app",
        role: "기획부터 배포까지 단독 수행",
        techStack: {
            frontend: ["Next.js (App Router)", "React", "TypeScript", "Redux Toolkit", "React Query", "Axios"],
            backend: ["MongoDB", "Next.js API Routes", "JWT", "Nodemailer", "나이스페이(NicePay) + Webhook", "PWA Service Worker"],
            CloudServices: ["Vercel", "Cloudinary"]
        },
        features: {
            user: [
                "카테고리 탭 + 디바운스 실시간 상품 검색",
                "장바구니 수량/옵션/총액 실시간 연산",
                "나이스페이 결제 연동 + 웹훅 기반 주문 승인",
                "동적 라우팅 기반 주문 상세 내역 조회",
                "JWT 기반 로그인, Nodemailer 회원가입/비밀번호 변경",
                "PWA 홈 화면 추가, 중복 요청 방지 로딩 처리",
            ],
            admin: [
                "Chart.js 매출/주문 대시보드",
                "JWT 기반 관리자 전용 인증",
                "상품 등록/수정 및 체크박스 다중 선택 일괄 삭제",
                "카테고리/키워드/날짜 범위 필터링",
            ],
        },
        keyDecisions: [
            {
                title: "프론트엔드 중심 Full-Stack 아키텍처",
                description:
                    "로컬스토리지/정적 JSON으로 시작했으나 주문·재고 상태의 영구 보존이 필요해 DB 도입하여, 별도 백엔드 서버 대신 Next.js API Routes + MongoDB를 선택해 프론트엔드 환경과의 연속성과 유연한 문서 구조를 확보하였습니다.",
            },
            {
                title: "단일 주문 / 장바구니 주문 흐름 분기",
                description:
                    "쿼리스트링 orderType으로 주문 유형을 전달, API Routes에서 이를 읽어 장바구니 주문일 때만 결제 완료 후 장바구니를 비우도록 비즈니스 로직을 명확히 분리하였습니다.",
            },
            {
                title: "체크박스 기반 일괄 삭제 API",
                description:
                    "관리자 페이지에서 선택한 상품 ID를 배열로 수집해 API Route로 전송, DB 단에서 단일 쿼리로 일괄 삭제 처리하였습니다.",
            },
        ],
        troubleshooting: [
            {
                problem: "장바구니 수량 변경 중 결제 시 가격 불일치",
                situation: "사용자가 장바구니에서 수량을 변경하는 순간 데이터가 서버로 전송되는 짧은 시간 동안 [결제하기] 버튼을 누를 수 있었습니다. 이 경우 서버 연산이 반영되기 전의 기존 수량과 가격으로 주문서가 생성되는 현상이 발생했습니다.",
                cause: "수량 변경 비동기 요청 완료 타이밍과 결제 페이지 이동 요청 간의 동기화가 이루어지지 않았습니다.",
                solution:
                    "장바구니 수량을 조절할 때 비동기 처리 기간 동안 [결제하기] 버튼을 로딩 상태로 전환하여 사용자 클릭을 차단했습니다. 수량 변경 요청이 완전히 성공한 뒤에만 결제 단계로 진입할 수 있도록 UI 흐름을 제한했습니다.",
            },
            {
                problem: "네트워크/사용자 이탈 시 결제 승인 누락 위험",
                situation: "클라이언트 사이드 승인 방식에만 의존할 경우, 사용자가 결제 도중 브라우저를 닫거나 결제 승인 후 네트워크 문제로 리디렉션 페이지에 도착하지 못하면 결제 내역 누락 및 이중 차금 등의 위험이 있었습니다.",
                cause: "클라이언트 환경의 불안정성에 의존적인 주문 승인 구조가 원인이었습니다.",
                solution:
                    "PG사(나이스페이)와 서버 대 서버로 직접 통신하는 웹훅 서버를 구축했습니다. 클라이언트 연결이 끊기더라도 PG사로부터 전달받은 결제 승인 이벤트를 백엔드에서 수신하여 주문 데이터의 안정성과 데이터 일관성을 보장했습니다.",
            },
            {
                problem: "배포 환경(Vercel)에서 결제 성공 후 리디렉션 실패",
                situation: "Vercel에 배포한 후 결제 성공 시 클라이언트 리디렉션이 동작하지 않고 요청이 대기 상태에 머무는 문제가 발생했습니다.",
                cause: "API Route에서 기본 NextResponse.redirect 처리 시, 일부 POST 기반 응답 처리나 PG사 콜백 흐름에서 HTTP 상태 코드가 적절하게 매핑되지 않았던 현상이었습니다.",
                solution: "NextResponse.redirect 호출 시 HTTP 303(See Other) 상태 코드를 명시적으로 전달하여 POST 처리 이후 GET 요청으로 올바르게 리디렉션되도록 수정했습니다.",
            },
        ],
        retrospective: {
            regret:
                "프로젝트 초반 컴포넌트별로 interface를 각각 정의하다 보니 중복 코드가 늘어났습니다. 개발을 진행하며 공통 타입은 별도 파일로 분리해 export하여 재사용하도록 다듬었으나, 처음부터 데이터 구조를 긴밀하게 추상화하지 못한 아쉬움이 남아 타입 설계의 중요성을 깨달았습니다.",
            future: [
                "현재는 상품 단위로 등록되어 있으나, 추후 동일 상품에 대해 샷 추가, 연하게 등 복잡한 퍼스널 옵션 배열을 수용할 수 있도록 옵션 선택 구조 및 장바구니 데이터 폼을 고도화할 계획입니다.",
                "사용자 재방문율과 이탈 방지를 위해 구매 건수별 스탬프 적립, 할인 쿠폰 발급 및 결제 시 쿠폰 적용이 가능하도록 데이터 모델과 결제 로직을 확장할 예정입니다.",
            ],
        },
    },
    {
        id: "project_1",
        src: cineAiVideo,
        title: "Cine AI",
        tagline: "Gemini 2.5 Flash 기반의 AI 대화형 맞춤형 영화 큐레이션 플랫폼",
        tagEx: "넷플릭스 스타일의 세련된 UI에 Gemini 2.5 Flash 엔진을 탑재하여, 사용자가 원하는 다양한 모드로 영화에 대해 질문하고 정밀한 답변을 받아볼 수 있는 스마트 영화 플랫폼입니다.",
        serviceUrl: "https://cine-ai-murex.vercel.app/",
        githubUrl: "https://github.com/seongjongju/cine_ai",
        role: "기획부터 배포까지 단독 수행",
        techStack: {
            frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query"],
            backend: ["Supabase", "Gemini 2.5 Flash API", "TMDB API"],
            CloudServices: ["Vercel"]
        },
        features: {
            core: [
                "스포일러 방지 / 영화광 / 철학적 해석 / 친근한 대화 등 다양한 AI 모드",
                "TMDB API 기반 실시간 최신작/인기작/상영예정작 데이터",
                "Google/Kakao 소셜 로그인 (Supabase Auth)",
                "최근 본 영화 히스토리 저장",
                "낙관적 업데이트 기반 관심 영화 찜하기",
                "영화명/장르 키워드 검색",
            ],
        },
        keyDecisions: [
            {
                title: "TanStack Query 기반 찜하기 낙관적 업데이트",
                description:
                    "영화 상세페이지에서 사용자가 '찜하기' 버튼을 누를 때 네트워크 요청 완료를 기다린 후 UI를 바꾸면 수백 밀리초 이상의 반박자 늦은 반응이 발생해 사용성이 떨어졌습니다. 이를 개선하기 위해 TanStack Query의 onMutate 개입 시점을 활용했습니다. 서버 응답이 오기 전 클라이언트 캐시 데이터를 즉시 수정해 찜 아이콘 상태를 바꾸고, 만약 백엔드 요청이 실패할 경우 onError 단에서 롤백(Rollback)시키는 낙관적 업데이트 구조를 구축해 즉각적인 인터랙션을 제공했습니다.",
            },
            {
                title: "사용자 목적에 맞춘 AI 프롬프트 분기 설계",
                description:
                    "최근 웹 서비스에 AI 기능 도입이 일반적인 트렌드로 자리 잡은 만큼, 단순한 일회성 질문-답변 구조를 넘어 사용자가 원하는 목적에 따라 AI 경험을 제어할 수 있도록 설계했습니다. 선택한 AI 모드(스포 방지, 영화광, 철학적 관점 등)에 맞춰 System Prompt 파라미터를 동적으로 변환하여 전달하는 방식을 도입했습니다.",
            },
        ],
        troubleshooting: [
            {
                problem: "찜하기 클릭 시 네트워크 지연으로 UI 반응 없음 + 중복 클릭 에러",
                situation: "상세페이지에서 찜하기 버튼을 누를 때 네트워크 요청이 처리되는 동안 UI 반응이 없어 답답함을 유발했고, 사용자가 제대로 처리되지 않은 것으로 오인해 버튼을 여러 번 연속 클릭하며 에러가 발생하는 문제가 있었습니다.",
                cause: "백엔드 응답이 도착한 후에만 UI를 변경하도록 비동기 흐름을 구성했던 점이 원인이었습니다.",
                solution:
                    "TanStack Query의 낙관적 업데이트(Optimistic Updates) 기술을 도입하여 서버 응답 이전에 UI를 즉시 변경하도록 개선했습니다. 이로써 사용자에게 반박자 빠른 반응성을 제공하고 중복 클릭 시도를 사전에 방지했습니다.",
            },
            {
                problem: "위시리스트 삭제 중 중복 클릭으로 상태 꼬임",
                situation: "상세페이지에서 찜하기 버튼을 누를 때 네트워크 요청이 처리되는 동안 UI 반응이 없어 답답함을 유발했고, 사용자가 제대로 처리되지 않은 것으로 오인해 버튼을 여러 번 연속 클릭하며 에러가 발생하는 문제가 있었습니다.",
                cause: "처리 중 상태(Loading State)에 대한 명시적인 UI 피드백과 사용자 입력 제한 로직이 없었기 때문이었습니다.",
                solution:
                    "react-spinners 라이브러리를 활용해 삭제 동작 진행 중임을 스피너로 암시적으로 알리고, 삭제 진행 동안에는 화면 UI에 dim처리를 하여 버튼을 클릭 할 수 없도록 처리했습니다.",
            },
        ],
        retrospective: {
            regret:
                "단순히 네트워크 요청이 성공하는 데서 그치지 않고, 요청이 진행 중임을 사용자에게 시각적으로 알려주는 것과 실패 시 적절한 알림 메시지를 전달하는 것이 사용성에 결정적인 영향을 미친다는 점을 체감했습니다.",
            future: [
                "현재 제공 중인 영화명 및 장르 검색을 넘어 개봉 날짜, 감독, 출연 배우 등 다양한 조건으로 찾아볼 수 있도록 검색 필터를 확장할 예정입니다.",
                "향후 웹 서칭 기능이 지원되는 AI 모델 버전으로 업그레이드하여, 기존 제공 줄거리 이외의 외부 최신 영화 정보나 디테일한 비하인드 요소까지 답변받을 수 있도록 고도화할 계획입니다.",
            ],
        },
        constraints: [
            "실제 영화 스트리밍 기능 미포함",
            "Gemini 2.5 Flash 환경 특성상 실시간 웹 서칭 제한 (TMDB 데이터 범위 내 답변)",
            "무료 티어 API RPM/RPD 트래픽 제한",
        ],
    },
    {
        id: "project_2",
        src: marryVideo,
        title: "모바일 청첩장 템플릿",
        tagline: "실제 지인 청첩장으로 사용된 모바일 웨딩 인비테이션 (개인정보 보호를 위해 미디어/상세 내용은 더미 데이터로 대체)",
        serviceUrl: "https://marry-template.pages.dev/",
        githubUrl: "https://github.com/seongjongju/marry_template",
        role: "기획부터 배포까지 단독 수행",
        techStack: {
            frontend: ["React", "Vite", "gsap", "react-calendar", "react-photoswipe-gallery", "photoswipe", "dayjs", "react-device-detect", "vite-plugin-html"],
            backend: ["Cloudflare Pages"],
        },
        features: {
            core: [
                "예식 일시 및 신랑·신부 정보 안내",
                "Tel/SMS URI Scheme 기반 바로 전화/문자 연결",
                "react-calendar 기반 예식일 시각화 + dayjs D-day 실시간 연산",
                "photoswipe 기반 모바일 터치 슬라이드 갤러리 및 라이트박스",
                "Kakao/Naver 지도 연동 및 Tmap/카카오내비/네이버지도 딥링크 연결",
                "Clipboard API 기반 계좌번호 복사",
                "OS별 맞춤 공유 (iOS Web Share API / Android 클립보드 복사)",
            ],
        },
        keyDecisions: [
            {
                title: "Cloudflare Pages 기반 트래픽 대응 인프라",
                description:
                    "예식 당일 하객 트래픽이 순간적으로 몰리고 대용량 이미지 요청이 집중될 것을 대비해, 대역폭 제한 없는 Cloudflare Pages로 배포해 안정성 확보.",
            },
            {
                title: "react-device-detect 기반 OS 분기 처리",
                description:
                    "iOS/Android 간 Web Share API 지원 여부와 딥링크 동작 방식이 달라, react-device-detect로 기기를 감지해 공유 로직을 OS별로 분기.",
            },
        ],
        troubleshooting: [
            {
                problem: "사진 도용 및 개인정보 노출 위험",
                cause: "청첩장 특성상 신랑·신부 사진과 개인정보가 외부에 그대로 노출되는 구조",
                solution:
                    "실운영 환경에 우클릭 방지 및 개발자 도구 진입 차단 스크립트를 적용해 콘텐츠 보안 강화 (현재 코드 검수를 위해 해제된 상태)",
            },
        ],
    },
    {
        id: "project_3",
        src: sermonVideo,
        title: "잔소리 피하기 게임",
        tagline: "하늘에서 떨어지는 잔소리를 피하는 캐주얼 웹 게임 — AI를 실제 작업 도구로 활용해 완성한 개인 프로젝트",
        serviceUrl: "https://sermon-avoid-game.vercel.app",
        itchUrl: "https://seongjongju.itch.io/sermon-avoid-game",
        githubUrl: "https://github.com/seongjongju/sermon_avoid_game",
        role: "요구사항 정의, 결과물 검수, 방향 결정 (코드 작성/디버깅은 AI 협업으로 진행)",
        techStack: {
            frontend: ["React", "Vite", "SCSS"],
        },
        features: {
            core: [
                "마우스 클릭으로 게임 시작",
                "잔소리 문구가 적힌 장애물이 랜덤 낙하",
                "장애물 통과 시 점수 상승, 충돌 시 게임 종료 (제한시간 없음)",
                "게임오버 화면 재시작 버튼",
                "BGM 재생 및 음소거/볼륨 조절",
            ],
        },
        aiWorkflow: {
            highlight: "이 프로젝트에서 가장 보여주고 싶은 부분은 AI를 실제 작업 도구로 다뤄본 경험",
            process: [
                "ChatGPT로 요구사항을 프롬프트로 정리 후 직접 검토",
                "검토 완료 후 Gemini에게 실제 코드 작성 및 그래픽 작업 요청",
                "결과물 검수 후 수정 필요 시 직접 고치지 않고 Gemini에게 재요청",
                "그래픽 리소스도 동일한 방식으로 Gemini 활용",
            ],
            roleSplit: "코드 작성과 디버깅은 AI가 담당, 본인은 요구사항 정의·결과물 검수·방향 결정을 담당",
        },
        keyDecisions: [
            {
                title: "React 선택 이유: 렌더링 방식",
                description:
                    "랜덤 값으로 계속 생성되는 낙하 장애물을 바닐라 자바스크립트로 처리하면 불필요한 렌더링이 많아 성능이 떨어짐. useRef로 상태를 관리해 실제 감지가 필요한 시점에만 렌더링되도록 구성.",
            },
            {
                title: "Vite / SCSS 선택 이유",
                description:
                    "Vite는 빠른 번들링 속도 때문에 선택. SCSS는 특별한 이유보다는 중첩 문법 덕분에 스타일 구조 파악이 편했고, styled-components와 문법이 유사해 익숙하게 사용.",
            },
        ],
        retrospective: {
            regret: "모바일에서는 동작하지 않고 반응형 대응도 되어있지 않아 PC 환경에서만 플레이 가능",
            future: [
                "아이템 요소 추가",
                "최고 점수를 localStorage에 저장해 자신의 기록 확인 가능하게 하기",
            ],
        },
        credits: ["BGM: \"Children's Happy\" by Kevin MacLeod (incompetech.com), CC BY 4.0"],
    },
];