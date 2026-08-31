import coffeeOrderVideo from 'src/assets/video/coffeeOrder.mp4';
import cineAiVideo from 'src/assets/video/cineAI.mp4';
import marryVideo from 'src/assets/video/marry.mp4';
import sermonVideo from 'src/assets/video/sermon.mp4';

export const viewData = [
    {
        id: "project_0",
        src: coffeeOrderVideo,
        title: "CoffeeOrderApp (커피 주문 웹앱)",
        tagline: "Next.js App Router와 API Routes 기반의 모바일 커피 주문 및 관리자 전용 PWA",
        serviceUrl: "https://jongju-coffee-order-app.vercel.app/",
        adminUrl: "https://jongju-coffee-order-app.vercel.app/admin/admin_login",
        githubUrl: "https://github.com/seongjongju/CoffeeOrder-app",
        role: "기획부터 배포까지 단독 수행",
        techStack: {
            frontend: ["Next.js (App Router)", "React", "TypeScript", "Redux Toolkit", "React Query", "Axios"],
            backend: ["MongoDB", "Next.js API Routes", "Vercel", "Cloudinary", "JWT", "Nodemailer", "나이스페이(NicePay) + Webhook", "PWA Service Worker"],
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
                    "로컬스토리지/정적 JSON으로 시작했으나 주문·재고 상태의 영구 보존이 필요해 DB 도입. 별도 백엔드 서버 대신 Next.js API Routes + MongoDB를 선택해 프론트엔드 환경과의 연속성과 유연한 문서 구조를 확보.",
            },
            {
                title: "단일 주문 / 장바구니 주문 흐름 분기",
                description:
                    "쿼리스트링 orderType으로 주문 유형을 전달, API Routes에서 이를 읽어 장바구니 주문일 때만 결제 완료 후 장바구니를 비우도록 비즈니스 로직을 명확히 분리.",
            },
            {
                title: "체크박스 기반 일괄 삭제 API",
                description:
                    "관리자 페이지에서 선택한 상품 ID를 배열로 수집해 API Route로 전송, DB 단에서 단일 쿼리로 일괄 삭제 처리.",
            },
        ],
        troubleshooting: [
            {
                problem: "장바구니 수량 변경 중 결제 시 가격 불일치",
                cause: "수량 변경 비동기 요청 완료 타이밍과 결제 페이지 이동 요청 간 동기화 미비",
                solution:
                    "수량 변경 비동기 처리 중 [결제하기] 버튼을 로딩 상태로 전환해 클릭 차단, 요청 성공 후에만 결제 단계 진입 허용",
            },
            {
                problem: "네트워크/사용자 이탈 시 결제 승인 누락 위험",
                cause: "클라이언트 사이드 승인 방식에만 의존하는 불안정한 주문 승인 구조",
                solution:
                    "나이스페이와 서버-서버 간 통신하는 웹훅 서버 구축, 클라이언트 연결이 끊겨도 결제 승인 이벤트를 백엔드에서 직접 수신하도록 처리",
            },
            {
                problem: "배포 환경(Vercel)에서 결제 성공 후 리디렉션 실패",
                cause: "NextResponse.redirect 기본 처리 시 POST 기반 응답/PG 콜백 흐름에서 HTTP 상태 코드 매핑 오류",
                solution: "NextResponse.redirect 호출 시 HTTP 303(See Other)을 명시해 POST 이후 GET으로 정상 리디렉션되도록 수정",
            },
        ],
        retrospective: {
            regret:
                "초반에 컴포넌트별로 interface를 각각 정의해 중복 코드가 늘어남. 이후 공통 타입을 별도 파일로 분리해 재사용하도록 리팩터링했으나, 처음부터 데이터 구조를 추상화하지 못한 점이 아쉬움",
            future: [
                "장바구니 퍼스널 옵션 확장 (샷 추가, 연하게 등 복합 옵션 지원)",
                "쿠폰/리워드 시스템 연동 (구매 건수별 스탬프, 할인 쿠폰 발급 및 적용)",
            ],
        },
    },
    {
        id: "project_1",
        src: cineAiVideo,
        title: "Cine AI",
        tagline: "Gemini 2.5 Flash 기반의 AI 대화형 맞춤형 영화 큐레이션 플랫폼",
        serviceUrl: "https://cine-ai-murex.vercel.app/",
        githubUrl: "https://github.com/seongjongju/cine_ai",
        role: "기획부터 배포까지 단독 수행",
        techStack: {
            frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query"],
            backend: ["Supabase (PostgreSQL, Auth, Storage)", "Gemini 2.5 Flash API", "TMDB API", "Vercel"],
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
                    "네트워크 응답을 기다린 후 UI를 바꾸면 반응이 늦어져 사용성이 떨어지는 문제를 해결하기 위해, onMutate 시점에 클라이언트 캐시를 즉시 수정해 찜 아이콘을 먼저 바꾸고 요청 실패 시 onError에서 롤백하는 구조를 구축.",
            },
            {
                title: "사용자 목적에 맞춘 AI 프롬프트 분기 설계",
                description:
                    "단순 일회성 질문-답변을 넘어, 선택한 AI 모드(스포 방지/영화광/철학적 관점 등)에 따라 System Prompt 파라미터를 동적으로 전달하도록 설계.",
            },
        ],
        troubleshooting: [
            {
                problem: "찜하기 클릭 시 네트워크 지연으로 UI 반응 없음 + 중복 클릭 에러",
                cause: "백엔드 응답 도착 후에만 UI를 변경하도록 구성된 비동기 흐름",
                solution:
                    "TanStack Query 낙관적 업데이트 도입으로 서버 응답 전에 UI를 즉시 변경, 반응성 개선 및 중복 클릭 사전 차단",
            },
            {
                problem: "위시리스트 삭제 중 중복 클릭으로 상태 꼬임",
                cause: "처리 중 상태에 대한 UI 피드백과 입력 제한 로직 부재",
                solution:
                    "react-spinners로 진행 중 상태를 시각화하고, 삭제 진행 동안 버튼 disabled 처리로 중복 클릭 차단",
            },
        ],
        retrospective: {
            regret:
                "요청 성공 자체보다, 진행 중임을 시각적으로 알리고 실패 시 적절히 알림을 주는 것이 사용성에 결정적이라는 점을 체감",
            future: [
                "검색 필터 확장 (개봉 날짜, 감독, 출연 배우)",
                "실시간 웹 서칭 지원 AI 모델로 업그레이드하여 최신 정보/비하인드 요소 제공",
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