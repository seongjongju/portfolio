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
    },
    {
        id: "project_2",
        src: marryVideo,
    },
    {
        id: "project_3",
        src: sermonVideo,
    },
];