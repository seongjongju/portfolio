import zustandIcon from 'src/assets/icon/zustand.svg';
import zustandIconW from 'src/assets/icon/zustand-w.svg';
import coffeeOrderThum from 'src/assets/images/coffeeOrder-app-thum_0.png';
import cineAiThum from 'src/assets/images/cine-ai-thum_0.png';
import marryThum from 'src/assets/images/merry-template-thum_0.png';
import sermonThum from 'src/assets/images/sermon-thum_0.png';
import portfolioThum from 'src/assets/images/portfolio-thum_0.png';
import publThum_0 from 'src/assets/images/works-thum_0.png';
import publThum_1 from 'src/assets/images/works-thum_1.png';
import publThum_2 from 'src/assets/images/works-thum_2.png';
import publThum_3 from 'src/assets/images/works-thum_3.png';
import resume from '/download/resume.pdf';

//gnb
export const depths = [
    { id: "0", page: "about", text: "ABOUT" },
    { id: "1", page: "projects", text: "PROJECTS" },
    { id: "2", page: "works", text: "WORKS" },
    { id: "3", page: "contact", text: "CONTACT" },
];

//footer
export const footerLinks = [
    {id: "link_0", link: "https://github.com/seongjongju", text: "GITHUB"},
    {id: "link_1", link: resume, download: "성종주 이력서.pdf", text: "DOWNLOAD RESUME"},
];

//StackIcon
export const stackIcons = [
    // 1. Core & Framework
    { id: "html", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/html5.svg", text: "HTML5" },
    { id: "css", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/css.svg", text: "CSS3" },
    { id: "js", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/javascript.svg", text: "JavaScript" },
    { id: "ts", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/typescript.svg", text: "TypeScript" },
    { id: "react", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/react.svg", text: "React" },
    { id: "next", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/nextdotjs.svg", text: "Next.js" },
    { id: "vite", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/vite.svg", text: "Vite" },

    // 2. State & Data Fetching
    { id: "query", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/reactquery.svg", text: "React Query" },
    { id: "redux", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/redux.svg", text: "Redux Toolkit" },
    { id: "zustand", src: zustandIcon, text: "Zustand" },

    // 3. Styling
    { id: "tailwind", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/tailwindcss.svg", text: "Tailwind CSS" },

    // 4. Backend & DB & Cloud Storage
    { id: "supabase", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/supabase.svg", text: "Supabase" },
    { id: "cloudinary", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cloudinary.svg", text: "Cloudinary" },
    { id: "mongodb", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/mongodb.svg", text: "MongoDB" },

    // 5. Deployment & Tools
    { id: "cloudflare", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cloudflare.svg", text: "Cloudflare" },
    { id: "vercel", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/vercel.svg", text: "Vercel" },
    { id: "git", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/git.svg", text: "Git" },
    { id: "figma", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/figma.svg", text: "Figma" },
];

//stackIconsWhite
export const stackIconsWhite = [
    // 1. Core & Framework
    { id: "html", src: "https://cdn.simpleicons.org/html5/ffffff", text: "HTML5" },
    { id: "css", src: "https://cdn.simpleicons.org/css/ffffff", text: "CSS3" },
    { id: "js", src: "https://cdn.simpleicons.org/javascript/ffffff", text: "JavaScript" },
    { id: "ts", src: "https://cdn.simpleicons.org/typescript/ffffff", text: "TypeScript" },
    { id: "react", src: "https://cdn.simpleicons.org/react/ffffff", text: "React" },
    { id: "next", src: "https://cdn.simpleicons.org/nextdotjs/ffffff", text: "Next.js" },
    { id: "vite", src: "https://cdn.simpleicons.org/vite/ffffff", text: "Vite" },

    // 2. State & Data Fetching
    { id: "query", src: "https://cdn.simpleicons.org/reactquery/ffffff", text: "React Query" },
    { id: "redux", src: "https://cdn.simpleicons.org/redux/ffffff", text: "Redux Toolkit" },
    { id: "zustand", src: zustandIconW, text: "Zustand" },

    // 3. Styling
    { id: "tailwind", src: "https://cdn.simpleicons.org/tailwindcss/ffffff", text: "Tailwind CSS" },

    // 4. Backend & DB & Cloud Storage
    { id: "supabase", src: "https://cdn.simpleicons.org/supabase/ffffff", text: "Supabase" },
    { id: "cloudinary", src: "https://cdn.simpleicons.org/cloudinary/ffffff", text: "Cloudinary" },
    { id: "mongodb", src: "https://cdn.simpleicons.org/mongodb/ffffff", text: "MongoDB" },

    // 5. Deployment & Tools
    { id: "cloudflare", src: "https://cdn.simpleicons.org/cloudflare/ffffff", text: "Cloudflare" },
    { id: "vercel", src: "https://cdn.simpleicons.org/vercel/ffffff", text: "Vercel" },
    { id: "git", src: "https://cdn.simpleicons.org/git/ffffff", text: "Git" },
    { id: "figma", src: "https://cdn.simpleicons.org/figma/ffffff", text: "Figma" },
];

//Certifications
export const certifications = [
    {id: "cer_0", date: "2021.01.29", text: "컴퓨터활용능력 1급"},
    {id: "cer_1", date: "2022.01.14", text: "GTQ 그래픽기술자격 1급"},
];

//project
export const projectDatas = [
    {
        id: "project_0",
        title: "CoffeeOrderApp",
        projectName: "CoffeeOrderApp",
        img: coffeeOrderThum,
        ex: "나이스페이먼츠 연동 커피 주문 웹앱",
        list: ["Personal", "Front-end 100%", "Back-end 100%", "UI/UX 100%"],
        badges: ["Next.js", "TypeScript", "Redux ToolKit", "Mongo DB", "JWT", "Nicepay", "Vercel"],
        texts: [
            "인증 & 권한 관리: JWT 기반 사용자 인증(Auth) 로직 및 보안 세션 구현",
            "Redux Toolkit 및 Redux Persist를 활용한 유저 상태 관리 및 로컬스토리지 동기화",
            "Next.js API Routes와 MongoDB를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "Nicepay 결제 연동 및 웹훅(Webhook) 처리 로직 구현",
            "*Front 테스트 계정 ID: test1, PW: test123!",
            "*Admin 테스트 계정 ID: admin, PW: 1234",
        ],
        view: "/projects/project_0",
        link: "https://jongju-coffee-order-app.vercel.app/",
        admin: "https://jongju-coffee-order-app.vercel.app/admin/admin_login",
        git: "https://github.com/seongjongju/CoffeeOrder-app"
    },
    {
        id: "project_1",
        title: "CineAI",
        projectName: "CineAI",
        img: cineAiThum,
        ex: "제미나이 API 연동 OTT웹 서비스",
        list: ["Personal", "Front-end 100%", "Back-end 100%", "UI/UX 100%"],
        badges: ["Next.js", "TypeScript", "Zustand", "Supabase", "Oauth", "GEMINI API", "Vercel"],
        texts: [
            "카카오, 구글 Supabase Oauth 구현",
            "Zustand를 활용한 오늘 본 영화 리스트 상태 관리",
            "Next.js API Routes와 Supabase를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "GEMINI API 연동을 통해 동적 QnA 구축"
        ],
        view: "/projects/project_1",
        link: "https://cine-ai-murex.vercel.app",
        admin: "",
        git: "https://github.com/seongjongju/cine_ai"
    },
    {
        id: "project_2",
        title: "marry-template",
        projectName: "모바일 청첩장 템플릿",
        img: marryThum,
        ex: "React 기반 반응형 모바일 청첩장 웹 애플리케이션",
        list: ["Personal", "Front-end 100%"],
        badges: ["React", "Vite", "Cloudflare Pages", "gsap", "PhotoSwipe", "Day.js"],
        texts: [
            "PhotoSwipe 기반 터치 슬라이드 갤러리 및 모달 UI 구현",
            "Kakao/Naver 지도 API 연동 및 TMap·카카오내비 딥링크 내비게이션 지원",
            "react-device-detect 기반 OS별 네이티브 공유 및 클립보드 분기 처리",
            "Cloudflare Pages 기반 배포를 통한 무제한 대역폭 인프라 구축 및 트래픽 안정성 확보"
        ],
        view: "/projects/project_2",
        link: "https://marry-template.pages.dev/",
        admin: "",
        git: "https://github.com/seongjongju/marry_template"
    },
    {
        id: "project_3",
        title: "sermon-avoid-game",
        projectName: "잔소리 피하기 게임",
        img: sermonThum,
        ex: "AI 활용 2D 장애물 피하기 웹 게임",
        list: ["Personal", "Front-end 100%", "UI/UX 100%"],
        badges: ["React", "Vite", "Vercel"],
        texts: [
            "인증 & 권한 관리: JWT 기반 사용자 인증(Auth) 로직 및 보안 세션 구현",
            "Redux Toolkit 및 Redux Persist를 활용한 유저 상태 관리 및 로컬스토리지 동기화",
            "Next.js API Routes와 MongoDB를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "Nicepay 결제 연동 및 웹훅(Webhook) 처리 로직 구현"
        ],
        view: "/projects/project_3",
        link: "https://seongjongju.itch.io/sermon-avoid-game",
        admin: "",
        git: "https://github.com/seongjongju/sermon_avoid_game"
    },
    {
        id: "project_4",
        title: "portfolio",
        projectName: "portfolio",
        img: portfolioThum,
        ex: "반응형 포트폴리오 페이지",
        list: ["Personal", "Front-end 100%", "UI/UX 100%"],
        badges: ["React ", "Vite", "gsap", "framer-motion","Vercel"],
        texts: [
            "인증 & 권한 관리: JWT 기반 사용자 인증(Auth) 로직 및 보안 세션 구현",
            "Redux Toolkit 및 Redux Persist를 활용한 유저 상태 관리 및 로컬스토리지 동기화",
            "Next.js API Routes와 MongoDB를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "Nicepay 결제 연동 및 웹훅(Webhook) 처리 로직 구현"
        ],
        view: "",
        link: "",
        admin: "",
        git: ""
    },
];

//works
export const publishingData = [
    {
        id: "publ_0",
        img: publThum_0,
        year: "2026",
        company: "대성이노켐",
        link: "https://dsinnochem.com/layout/kor/home.php?go=main",
    },
    {
        id: "publ_1",
        img: publThum_1,
        year: "2026",
        company: "산지GO",
        link: "https://sanjigo.kr/layout/res/home.php?go=main",
    },
    {
        id: "publ_2",
        img: publThum_2,
        year: "2025",
        company: "노바바이오 메디컬코리아",
        link: "https://korea-novabiomedical.com/layout/res/home.php?go=main",
    },
    {
        id: "publ_3",
        img: publThum_3,
        year: "2025",
        company: "우동단",
        link: "https://udondancp.com/layout/res/home.php?go=main",
    },
];